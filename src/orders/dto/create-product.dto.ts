import { IsString, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  @Max(10000)
  stock: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  constructor(name: string, price: number, stock: number, category: string) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }

  validateInvariants(): void {
    if (this.price < 0) {
      throw new Error('Price cannot be negative');
    }
    if (this.stock < 0 || this.stock > 10000) {
      throw new Error('Stock must be between 0 and 10000');
    }
    if (!this.name || this.name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    if (!this.category || this.category.trim() === '') {
      throw new Error('Category cannot be empty');
    }
  }
}