import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { NotFound } from './not-found/not-found';
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, NotFound, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('25-Routing');
}
