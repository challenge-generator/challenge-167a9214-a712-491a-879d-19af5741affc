import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  UseFilters,
  ParseUUIDPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { ProductNotFoundException } from '../common/exceptions/product-not-found.exception';
import { InvalidProductException } from '../common/exceptions/invalid-product.exception';

@Controller('products')
@UseFilters(HttpExceptionFilter)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    try {
      createProductDto.validateInvariants();
      return await this.ordersService.createProduct(createProductDto);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('Price')) {
          throw InvalidProductException.forInvalidPrice();
        }
        if (error.message.includes('Stock')) {
          throw InvalidProductException.forInvalidStock();
        }
        if (error.message.includes('Name') || error.message.includes('Category')) {
          throw InvalidProductException.forInvariantViolation(error.message);
        }
      }
      throw error;
    }
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.ordersService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id', ParseUUIDPipe) id: string): Promise<Product> {
    const product = await this.ordersService.getProductById(id);
    if (!product) {
      throw ProductNotFoundException.forId(id);
    }
    return product;
  }

  @Put(':id')
  async updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    try {
      updateProductDto.validateInvariants();
      const product = await this.ordersService.updateProduct(id, updateProductDto);
      if (!product) {
        throw ProductNotFoundException.forId(id);
      }
      return product;
    } catch (error) {
      if (error instanceof ProductNotFoundException) {
        throw error;
      }
      if (error instanceof Error) {
        if (error.message.includes('Price')) {
          throw InvalidProductException.forInvalidPrice();
        }
        if (error.message.includes('Stock')) {
          throw InvalidProductException.forInvalidStock();
        }
        if (error.message.includes('Name') || error.message.includes('Category')) {
          throw InvalidProductException.forInvariantViolation(error.message);
        }
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const product = await this.ordersService.getProductById(id);
    if (!product) {
      throw ProductNotFoundException.forId(id);
    }
    await this.ordersService.deleteProduct(id);
  }
}