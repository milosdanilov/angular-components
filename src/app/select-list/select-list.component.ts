import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SelectListItemDefinition } from './select-list.interface';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
})
export class SelectListComponent {
  @Input()
  items: SelectListItemDefinition[] = [];

  @Output()
  selectedChange = new EventEmitter<SelectListItemDefinition[]>();

  onListChange() {
    const selected = this.items.filter((item) => !!item.value);
    this.selectedChange.next(selected);
  }
}
