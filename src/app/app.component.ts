import { Component } from '@angular/core';
import { SelectListItemDefinition } from './select-list/select-list.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listItems: SelectListItemDefinition[] = [
    {
      name: 'First checkbox',
      value: false,
      description: 'With support text underneath to add more detail',
    },
    {
      name: 'Second checkbox',
      value: true,
      description: 'Some other text goes here',
    },
    {
      name: 'Third checkbox',
      value: false,
      description: 'And we end with another snippet of text',
    },
  ];

  onSelectedChange(event: SelectListItemDefinition[]) {
    console.log(event);
  }
}
