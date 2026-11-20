// TODO(reto): archivo stubbeado; implementa los cuerpos.
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { InvalidProductException } from '../exceptions/invalid-product.exception';
import { ProductNotFoundException } from '../exceptions/product-not-found.exception';
import { ValidationException } from '../exceptions/validation.exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = 'Internal Server Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      
      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        const responseObj = exceptionResponse as Record<string, unknown>;
        message = (responseObj.message as string) || message;
        error = (responseObj.error as string) || error;
      }
    } else if (exception instanceof InvalidProductException) {
      status = HttpStatus.BAD_REQUEST;
      message = exception.message;
      error = 'Invalid Product';
    } else if (exception instanceof ProductNotFoundException) {
      status = HttpStatus.NOT_FOUND;
      message = exception.message;
      error = 'Product Not Found';
    } else if (exception instanceof ValidationException) {
      status = HttpStatus.BAD_REQUEST;
      message = exception.message;
      error = 'Validation Error';
    } else if (exception instanceof Error) {
      message = exception.message;
      this.logger.error(
        `Unhandled exception: ${exception.message}`,
        exception.stack
      );
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      error,
      message: Array.isArray(message) ? message : [message],
    };

    this.logger.error(
      `${request.method} ${request.url} - Status: ${status} - Message: ${message}`
    );

    response.status(status).json(errorResponse);
  }

  buildErrorResponse(
    status: HttpStatus,
    error: string,
    message: string | string[],
    request: Request
  ): Record<string, unknown> {
    throw new Error('TODO(reto): buildErrorResponse');
  }

  isHttpException(exception: unknown): exception is HttpException {
    throw new Error('TODO(reto): isHttpException');
  }

  getStatusFromException(exception: unknown): number {
    throw new Error('TODO(reto): getStatusFromException');
  }

  getMessageFromException(exception: unknown): string {
    throw new Error('TODO(reto): getMessageFromException');
  }
}