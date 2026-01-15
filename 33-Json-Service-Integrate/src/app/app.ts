import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './service/users';
import { User } from './interfaces/user';
import { Form } from "./form/form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Form],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = signal<User[]>([]);
  protected readonly title = signal('33-Json-Service-Integrate');
  constructor(public usersdata: Users) {}
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.usersdata.ngOnInit().subscribe((data: User[]) => {
      console.log('Users from JSON Server:', data);
      this.users.set(data);
    });
  }
   deleteUsers(id: string) {
    this.usersdata.deleteUser(id).subscribe(() => {
      console.log('User deleted with id:', id);
      this.getUser();
    });
  }
}
