import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor(private httpClient: HttpClient) {}

  getProducts(): Product[] {
    return this.items;
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
  }

  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
