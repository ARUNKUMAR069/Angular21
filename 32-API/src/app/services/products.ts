import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  
  constructor( private http:HttpClient) {}
  getProductsList() {
    const productsUrl = 'https://dummyjson.com/products';
    return this.http.get(productsUrl);
  }
  getProductById(id:number) {
    const productUrl = `https://dummyjson.com/products/${id}`;
    return this.http.get(productUrl);
  }
}
