import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet],
  template: '<div><h2>Login Component</h2><p>Please enter your login details.</p></div>',
  styles: 'div { color: blue; font-size: 20px; } p { font-style: italic; }',
})
export class Login {
  protected readonly title = signal('7-Custom-Components');
}
