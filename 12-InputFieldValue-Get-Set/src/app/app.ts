import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('12-InputFieldValue-Get-Set');
  name=""
  displayName=""
  email=""
  getName(event:Event) {
    this.name=(event.target as HTMLInputElement).value;
  }
  showName() {
    this.displayName=this.name;
  }



getEmail(value:string) {

console.log('Email Address: '+value);
this.email=value;
}

}