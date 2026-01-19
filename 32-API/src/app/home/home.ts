import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Products } from '../services/products';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  productData: any = signal('');
  
  constructor(public productService: Products) {}
  
  ngOnInit() {
    this.productService.getProductsList().subscribe((data: any) => {
      console.log('Products from API:', data.products);
      this.productData.set(data.products);
    });
  }
}
