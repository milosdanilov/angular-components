import { Component } from '@angular/core';
import { SelectListItemDefinition } from './select-list/select-list.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  listItems: SelectListItemDefinition[] = [
    { name: 'First checkbox', value: false },
    { name: 'Second checkbox', value: true },
    { name: 'Third checkbox', value: false }
  ];

  onSelectedChange(event: SelectListItemDefinition[]) {
    console.log(event);
  }
}
