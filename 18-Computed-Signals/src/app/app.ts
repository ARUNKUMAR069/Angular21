import { Component, computed, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('18-Computed-Signals');
  x=10;
  y=20;
  x1=signal(10);
  y1=signal(20);

  z=this.x + this.y;

  showValue(){
    console.log('Value of Z: '+this.z);
  }

  updateX( ){{}
    this.x += 10;
    
  }
  updateY( ) {
    this.y += 10;
  }

  z1 :Signal<number>= computed (()=>{
    return this.x1() + this.y1();
  });



}
