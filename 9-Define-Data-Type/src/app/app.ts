import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('9-Define-Data-Type');
  // This is a Property Definition with Data Type
  name:string = 'Angular Learner';

  updateName() {
    //  Varibale in the Type Script Function
    let x:string|number|boolean='New Name';
    this.name = x;
    this.Statement(x);
    x=true;
    this.Statement(x);
    x=2024;
    this.Statement(x);
  }

  //  Common Differnce between Variable and Property is that a Property is defined inside a Class with Data Type

Statement(statement:string|number|boolean)  {

alert(statement);
}






}