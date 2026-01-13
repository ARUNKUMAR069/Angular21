import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  template: `
    <div>
      <input placeholder="Search..." />
    </div>
    
  `,
  styles: `div { margin: 10px; } input { width: 100%; padding: 8px; }`,
})
export class Search {

}
