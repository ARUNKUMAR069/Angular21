import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './service/users';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = signal<User[]>([]);
  protected readonly title = signal('33-Json-Service-Integrate');
  constructor(public usersdata: Users) {}
  ngOnInit() {
    this.usersdata.ngOnInit().subscribe((data: User[]) => {
      console.log('Users from JSON Server:', data);
      this.users.set(data);
    });
  }
}
