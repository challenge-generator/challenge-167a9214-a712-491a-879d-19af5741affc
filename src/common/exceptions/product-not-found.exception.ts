import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductNotFoundException extends HttpException {
  constructor(id: string) {
    super(`Product with ID ${id} not found`, HttpStatus.NOT_FOUND);
  }

  static forId(id: string): ProductNotFoundException {
    return new ProductNotFoundException(id);
  }
}