import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http:HttpClient) { console.log('Users Service Initialized'); }
  ngOnInit(){
       const usersUrl = 'http://localhost:3000/users';
    return this.http.get<User[]>(usersUrl);
  }
  
  
}
