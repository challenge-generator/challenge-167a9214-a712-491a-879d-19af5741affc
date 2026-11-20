import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../../orders/orders.service';
import { Product } from '../../orders/entities/product.entity';
import { CreateProductDto } from '../../orders/dto/create-product.dto';

describe('OrdersService', () => {
  let service: OrdersService;
  let repository: {
    createProduct: jest.Mock;
    findAllProducts: jest.Mock;
    findProductById: jest.Mock;
    updateProduct: jest.Mock;
    deleteProduct: jest.Mock;
  };

  beforeEach(async () => {
    const mockRepository = {
      createProduct: jest.fn(),
      findAllProducts: jest.fn(),
      findProductById: jest.fn(),
      updateProduct: jest.fn(),
      deleteProduct: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: 'OrderRepository',
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    repository = module.get('OrderRepository');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createProduct', () => {
    it.todo('TODO(reto): should create a product and return it');
    it.todo('TODO(reto): should throw ValidationException when DTO is invalid');
  });

  describe('getProducts', () => {
    it.todo('TODO(reto): should return all products');
    it.todo('TODO(reto): should return empty array when no products exist');
  });

  describe('getProductById', () => {
    it.todo('TODO(reto): should return product when found');
    it.todo('TODO(reto): should throw ProductNotFoundException when not found');
  });

  describe('updateProduct', () => {
    it.todo('TODO(reto): should update and return product');
    it.todo('TODO(reto): should throw ProductNotFoundException when not found');
    it.todo('TODO(reto): should throw ValidationException when update data is invalid');
  });

  describe('deleteProduct', () => {
    it.todo('TODO(reto): should delete product successfully');
    it.todo('TODO(reto): should throw ProductNotFoundException when not found');
  });
});