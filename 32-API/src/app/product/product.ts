import { Component, signal } from '@angular/core';
import { Products } from '../services/products';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ProductDetail {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  availabilityStatus: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  reviews: any[];
}

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product = signal<ProductDetail | null>(null);
  selectedImage = signal<string>('');
  loading = signal<boolean>(true);
  error = signal<string>('');

  constructor(
    private service: Products,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.loading.set(true);
      this.error.set('');
      
      this.service.getProductById(id).subscribe({
        next: (data: any) => {
          this.product.set(data);
          this.selectedImage.set(data.thumbnail);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load product details');
          this.loading.set(false);
          console.error('Error fetching product:', err);
        }
      });
    });
  }

  selectImage(image: string) {
    this.selectedImage.set(image);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  calculateDiscountedPrice(price: number, discount: number): number {
    return price - (price * discount / 100);
  }
}
