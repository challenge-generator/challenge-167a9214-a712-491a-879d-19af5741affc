import { Injectable, Logger, Inject } from '@nestjs/common';
import { OrderRepository } from './repositories/order.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductNotFoundException } from '../common/exceptions/product-not-found.exception';
import { InvalidProductException } from '../common/exceptions/invalid-product.exception';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  constructor(@Inject('OrderRepository') private readonly orderRepository: OrderRepository) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    this.logger.log(`Creating product with name: ${createProductDto.name}`);

    try {
      const product = new Product(
        createProductDto.name,
        createProductDto.price,
        createProductDto.stock,
        createProductDto.category,
      );

      const createdProduct = await this.orderRepository.createProduct(product);
      this.logger.log(`Product created successfully with id: ${createdProduct.id}`);
      return createdProduct;
    } catch (error) {
      this.logger.error(`Failed to create product: ${error}`);
      if (error instanceof InvalidProductException) {
        throw error;
      }
      throw InvalidProductException.forInvariantViolation(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  async getProducts(): Promise<Product[]> {
    this.logger.log('Fetching all products');
    const products = await this.orderRepository.findAllProducts();
    this.logger.log(`Found ${products.length} products`);
    return products;
  }

  async getProductById(id: string): Promise<Product | null> {
    this.logger.log(`Fetching product with id: ${id}`);
    const product = await this.orderRepository.findProductById(id);
    if (!product) {
      this.logger.warn(`Product not found with id: ${id}`);
      return null;
    }
    return product;
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product | null> {
    this.logger.log(`Updating product with id: ${id}`);

    const existingProduct = await this.orderRepository.findProductById(id);
    if (!existingProduct) {
      this.logger.warn(`Product not found for update with id: ${id}`);
      return null;
    }

    try {
      const updateData: Partial<Product> = {};
      if (updateProductDto.name !== undefined) {
        updateData.name = updateProductDto.name;
      }
      if (updateProductDto.price !== undefined) {
        updateData.price = updateProductDto.price;
      }
      if (updateProductDto.stock !== undefined) {
        updateData.stock = updateProductDto.stock;
      }
      if (updateProductDto.category !== undefined) {
        updateData.category = updateProductDto.category;
      }

      const updatedProduct = await this.orderRepository.updateProduct(id, updateData);
      this.logger.log(`Product updated successfully with id: ${updatedProduct.id}`);
      return updatedProduct;
    } catch (error) {
      this.logger.error(`Failed to update product: ${error}`);
      if (error instanceof InvalidProductException) {
        throw error;
      }
      throw InvalidProductException.forInvariantViolation(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  async deleteProduct(id: string): Promise<void> {
    this.logger.log(`Deleting product with id: ${id}`);
    await this.orderRepository.deleteProduct(id);
    this.logger.log(`Product deleted successfully with id: ${id}`);
  }
}