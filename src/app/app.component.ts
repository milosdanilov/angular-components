import { Component, OnInit } from '@angular/core';
import { SelectListItemDefinition } from './select-list/select-list.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  listItems: SelectListItemDefinition[] = [
    {
      id: 1,
      name: 'First checkbox',
      value: false,
      description: 'With support text underneath to add more detail',
    },
    {
      id: 2,
      name: 'Second checkbox',
      value: true,
      description: 'Some other text goes here',
    },
    {
      id: 3,
      name: 'Third checkbox',
      value: false,
      description: 'And we end with another snippet of text',
    },
  ];

  selectedListItems!: SelectListItemDefinition[];

  ngOnInit() {
    const c = this.listItems.find(item => item.value);
    this.selectedListItems = c ? [c] : [];
  }

  onSelectedChange(list: SelectListItemDefinition[]) {
    this.selectedListItems = list;
  }
}
