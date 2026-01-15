import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http: HttpClient) {
    console.log('Users Service Initialized');
  }
  getUsers() {
    const usersUrl = 'http://localhost:3000/users';
    return this.http.get<User[]>(usersUrl);
  }

  ngOnInit() {
    this.getUsers();
  }

  addUser(user: any) {
    const usersUrl = 'http://localhost:3000/users';
    return this.http.post<User>(usersUrl, user);
  }
  deleteUser(id: string) {
    const usersUrl = `http://localhost:3000/users/${id}`;
    return this.http.delete<void>(usersUrl);
  }
}
