import { Product } from '../entities/product.entity';

export interface OrderRepository {
  createProduct(product: Product): Promise<Product>;
  findAllProducts(): Promise<Product[]>;
  findProductById(id: string): Promise<Product | null>;
  updateProduct(id: string, product: Partial<Product>): Promise<Product>;
  deleteProduct(id: string): Promise<void>;
}