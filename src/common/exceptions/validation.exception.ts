// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { HttpException, HttpStatus } from '@nestjs/common';
import { InvalidProductException } from './invalid-product.exception';
import { ProductNotFoundException } from './product-not-found.exception';

export class ValidationException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }

  static fromValidationErrors(errors: string[]): ValidationException {
    throw new Error('TODO(reto): fromValidationErrors');
  }

  static fromDtoValidation(dtoName: string, errors: string[]): ValidationException {
    throw new Error('TODO(reto): fromDtoValidation');
  }

  static forInvalidProductData(data: unknown): ValidationException {
    throw new Error('TODO(reto): forInvalidProductData');
  }

  static handleProductException(error: unknown): HttpException {
    throw new Error('TODO(reto): handleProductException');
  }

  static validateProductFields(
    name?: string,
    price?: number,
    stock?: number,
    category?: string
  ): void {
    throw new Error('TODO(reto): validateProductFields');
  }

  static validatePartialProductFields(
    name?: string,
    price?: number,
    stock?: number,
    category?: string
  ): void {
    throw new Error('TODO(reto): validatePartialProductFields');
  }
}