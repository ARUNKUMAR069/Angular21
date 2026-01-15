import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../interfaces/user';
import { Users } from '../service/users';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  constructor(private userdata: Users) {}
  addUsers(user: any) {
    this.userdata.addUser(user).subscribe((newUser: User) => {
      console.log('New User added:', newUser);
      this.userdata.getUsers()
    });
  }

 
}
