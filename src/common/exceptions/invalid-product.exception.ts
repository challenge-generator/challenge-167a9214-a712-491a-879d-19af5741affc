import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidProductException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }

  static forInvariantViolation(violation: string): InvalidProductException {
    return new InvalidProductException(`Invalid product: ${violation}`);
  }

  static forMissingFields(fields: string[]): InvalidProductException {
    return new InvalidProductException(`Missing required fields: ${fields.join(', ')}`);
  }

  static forInvalidPrice(): InvalidProductException {
    return new InvalidProductException('Price must be a positive number');
  }

  static forInvalidStock(): InvalidProductException {
    return new InvalidProductException('Stock must be between 0 and 10000');
  }
}