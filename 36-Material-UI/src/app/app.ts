import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Button } from "./button/button";
import { MatList, MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, MatDivider, MatIcon, Button,MatListModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('36-Material-UI');
}
