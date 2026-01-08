import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('4-Interpolation');
  name="Arun Kumar";
  x=10
  y=20
  user1="Akash"
  user2="Sumit"
}
