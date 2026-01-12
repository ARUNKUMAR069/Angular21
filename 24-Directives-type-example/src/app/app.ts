import { NgIf, NgForOf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('24-Directives-type-example');
  show = true;

  students = ['Alice', 'Bob', 'Charlie', 'David'];
  teachers = [
    { name: 'Mr. Smith', subject: 'Math' },
    { name: 'Ms. Johnson', subject: 'English' },
    { name: 'Mrs. Brown', subject: 'Science' },

  ];
}
