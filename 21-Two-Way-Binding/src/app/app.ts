import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('21-Two-Way-Binding');
  name=""
  adress=""
changeName(event:Event){
  const inputElement = event.target as HTMLInputElement;
  this.adress=inputElement.value
}



}
