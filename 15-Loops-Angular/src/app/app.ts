import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('15-Loops-Angular');
  users=["alice","bob","charlie","david","even"]
  students=[
    {name:"Alice",age:20, grade:"A"},
    {name:"Bob",age:22, grade:"B"},
    {name:"Charlie",age:21, grade:"A"},
    {name:"David",age:23, grade:"C"},
    {name:"Eve",age:20, grade:"B"}
  ]
}
