import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('22-Todo-List');
  task = '';
  tasklist: { id: number; task: string }[] = [];
  addTask() {
    this.tasklist.push({ id: this.tasklist.length + 1, task: this.task });
    this.task = '';
  }
}
