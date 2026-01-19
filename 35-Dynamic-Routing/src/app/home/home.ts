import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'aru@gmail.com',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: '  ka@gmail.com ',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      email: 'someone@gmail.com',
    },
  ];
}
