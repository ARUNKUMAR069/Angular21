import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatButton,MatDivider,MatIcon],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

}
