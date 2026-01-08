import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('10-Counter-Application');
count=0;
  handleCounter(value:string) {
   if(value==='increment') {
    this.count++;
   }
    else if(value==='decrement') {
      if(this.count>0){

        this.count--;
      }
      else{
        alert('Counter cannot be negative');
      }
    }
    else if(value==='reset') {
    this.count=0;
    }
    else {
    alert('Invalid Operation');
    }
  }


}
