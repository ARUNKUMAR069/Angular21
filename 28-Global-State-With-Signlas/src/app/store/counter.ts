import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count = signal(0);
  increment() {
    this.count.set(this.count() + 1);
  }
  decrement() {
    if (this.count() > 0){

      this.count.set(this.count() - 1);
    }
    else{
      alert("Count cannot be negative");
    }
  }
  reset() {
    this.count.set(0);
  }
}
