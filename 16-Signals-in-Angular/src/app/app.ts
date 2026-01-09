import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 count=signal(0);
 x=0;  
 updateValue(value:string) {
  if(value=='+'){
    this.x+=1;
  }
  else{
    this.x-=1;
  }
 }

constructor() {
  effect(() => {
    console.log(' Count Using Signlas:', this.count());
    
  });

  effect(() => {
    console.log(' Value of X:', this.x);
  });
}
}
