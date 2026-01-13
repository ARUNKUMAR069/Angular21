import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Search } from "./search/search";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('26-Inline-Components');
  nums=signal([1,2,3,4,5,6,7,8,9,10]);
}
