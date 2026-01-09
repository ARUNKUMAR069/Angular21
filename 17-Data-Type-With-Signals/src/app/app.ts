import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('17-Data-Type-With-Signals');
  data  :WritableSignal <number|string>=signal <number|string>(10)
  count  :WritableSignal <number|string>=signal <number|string>(10)
  updateData(value:string) {
    if(!isNaN(Number(value))){
      this.data.set(Number(value))
    }
    else{
      this.data.set(value)
    }
  }
}
