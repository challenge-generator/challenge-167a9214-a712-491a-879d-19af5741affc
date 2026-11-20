import { IsString, IsNumber, Min, Max, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @IsNumber()
  @Min(0)
  @Max(10000)
  @IsOptional()
  stock?: number;

  @IsString()
  @IsOptional()
  category?: string;

  constructor(name?: string, price?: number, stock?: number, category?: string) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }

  validateInvariants(): void {
    if (this.price !== undefined && this.price < 0) {
      throw new Error('Price cannot be negative');
    }
    if (this.stock !== undefined && (this.stock < 0 || this.stock > 10000)) {
      throw new Error('Stock must be between 0 and 10000');
    }
    if (this.name !== undefined && (!this.name || this.name.trim() === '')) {
      throw new Error('Name cannot be empty');
    }
    if (this.category !== undefined && (!this.category || this.category.trim() === '')) {
      throw new Error('Category cannot be empty');
    }
  }
}