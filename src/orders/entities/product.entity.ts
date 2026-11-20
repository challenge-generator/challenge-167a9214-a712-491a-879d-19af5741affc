import { v4 as uuidv4 } from 'uuid';

export class Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;

  constructor(name: string, price: number, stock: number, category: string, id?: string) {
    this.id = id || uuidv4();
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
    this.validateInvariants();
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

  update(updateData: Partial<Product>): Product {
    if (updateData.name !== undefined) {
      this.name = updateData.name;
    }
    if (updateData.price !== undefined) {
      this.price = updateData.price;
    }
    if (updateData.stock !== undefined) {
      this.stock = updateData.stock;
    }
    if (updateData.category !== undefined) {
      this.category = updateData.category;
    }
    this.validateInvariants();
    return this;
  }
}