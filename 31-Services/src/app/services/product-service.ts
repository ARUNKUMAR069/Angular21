import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('ProductService initialized');
  }

  getProducts() {
    return [
      { id: 1, name: 'Product A', price: 1000},
      { id: 2, name: 'Product B', price: 1000},
      { id: 3, name: 'Product C', price: 1000},
    ];
  }
}
