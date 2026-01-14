import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('32-API');
  productData: any = signal('');
  constructor(public productService: Products) {}
  ngOnInit() {
    this.productService.getProductsList().subscribe((data: any) => {
      console.log('Products from API:', data.products);
      this.productData.set(data.products);
    });
  }
}
