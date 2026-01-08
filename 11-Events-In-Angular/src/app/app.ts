import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('11-Events-In-Angular');

  handleEvent(event:Event) {

    console.log('Function Called on ' + event.type + ' Event'+ event);
  }

  inputEvent(event:Event) {

    const inputElement = event.target as HTMLInputElement;
    console.log('Input Event Value: ' + inputElement.value);
  }
}
