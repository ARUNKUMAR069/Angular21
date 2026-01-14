import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('29-Pipes-In-Angular');
  title = '29-Pipes-In-Angular';
  amount = signal(100);
  date = '24-06-2024';
  mobile = 'samsung';
  user = signal([
    { name: 'John Doe', age: 30, location: 'USA' },
    { name: 'Jane Smith', age: 25, location: 'UK' },
    { name: 'Alice Johnson', age: 28, location: 'Canada' },
  ]);
}
