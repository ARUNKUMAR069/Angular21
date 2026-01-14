import { Component, input,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
@Input() userName:string|undefined;


whichUser(name:string | undefined){

console.log("User name from parent to child is:",name);
}
}