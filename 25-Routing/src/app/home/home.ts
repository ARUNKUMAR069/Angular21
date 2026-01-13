import { Component } from '@angular/core';
import { NotFound } from '../not-found/not-found';
import { Header } from '../header/header';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Header, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
