import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('14-Control-Statements');
  display=true
  color=1
  colordiv="red"

  toggleDisplay() {
    this.display=!this.display
  }
  colorChnageBox(value:number) {
    this.color=value
  }
  colorChangeDiv(value:string) {
    this.colordiv=value
  }
}