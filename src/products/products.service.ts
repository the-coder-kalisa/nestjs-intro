import { Injectable, NotFoundException } from '@nestjs/common';
import { on } from 'events';
import { Product } from './products.model';
@Injectable()
export class ProductService {
  products: Product[] = [];
  insertProduct(title: string, description: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    return prodId;
  }
  getProducts(): Product[] {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product: Product = this.findProduct(productId)[0];

    return { ...product };
  }
  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const [product, index] = this.findProduct(productId);
    const updateProduct = {...product};
    if (title) {
      updateProduct.title = title;
    }
    if (description) {
      updateProduct.description = description;
    }
    if (price) {
      updateProduct.price = price;
    }
    this.products[index] = updateProduct;
  }
  private findProduct(id: string) : [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return [product, productIndex];
  }

  deleteProduct(prodId: string) {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }
}
