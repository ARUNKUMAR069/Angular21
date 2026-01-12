import { Component } from '@angular/core';
import { NotFound } from '../not-found/not-found';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
