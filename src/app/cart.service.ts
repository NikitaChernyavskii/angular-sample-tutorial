import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable()
export class CartService {
  items: Product[] = [];
  constructor() {}

  getProducts(): Product[] {
    return this.items;
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
  }
}
