import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: 'OrderRepository',
      useValue: {
        createProduct: jest.fn(),
        findAllProducts: jest.fn(),
        findProductById: jest.fn(),
        updateProduct: jest.fn(),
        deleteProduct: jest.fn(),
      },
    },
  ],
})
export class AppModule {}