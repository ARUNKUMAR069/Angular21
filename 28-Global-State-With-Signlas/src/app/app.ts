import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayCount } from "./display-count/display-count";
import { ControlCount } from "./control-count/control-count";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayCount, ControlCount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('28-Global-State-With-Signlas');
}
