import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('27-Passing-Data-Parent-to-Child-Child-to-Parent');
  users= signal(['John', 'Jane', 'Doe', 'Smith', 'Alice', 'Bob', 'Charlie']);
  user=signal('');
  selectedUser=signal('');
  addNewUser(newUser: string) {
    this.users.set([...this.users(), newUser]);
    this.user.set('');
  }
  selectUser(user:string){
    this.selectedUser.set(user);
  }

}
