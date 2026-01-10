import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('19-Effects-In-Angular');
  username = signal('Angular Developer Arun');
  count = signal(0);
  displayHeading = signal(false);

  constructor() {
    effect(() => {
      console.log('Username changed to:', this.username() + ' | Count is: ' + this.count());
      if (this.count() === 2) {
        this.displayHeading.set(true);
        setTimeout(() => {
          this.displayHeading.set(false);
        }, 2000);
      } else {
        this.displayHeading.set(false);
      }
    });
  }
  toggleValue() {
    this.count.set(this.count() + 1);
  }
}
