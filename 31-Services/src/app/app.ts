import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  productData:any=signal("")
  constructor(public productService: ProductService) {}

  ngOnInit() {
    const products = this.productService.getProducts();
    console.log('Products:', products);
    this.productData.set(products);
  }
}
