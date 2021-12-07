import { Component, Input, OnInit } from '@angular/core';

import { SelectListComponent } from '../select-list/select-list.component';
import { SelectListItemDefinition } from '../select-list/select-list.interface';

@Component({
  selector: 'app-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.scss'],
})
export class RadioItemComponent implements OnInit {
  @Input()
  item!: SelectListItemDefinition;

  constructor(public selectListCmp: SelectListComponent) {}

  ngOnInit(): void {}

  onSingleChange(selectedId: number) {
    this.selectListCmp.selectedListItem =
      this.selectListCmp.items.find((item) => item.id === selectedId) ?? null;

    const selected = this.selectListCmp.selectedListItem
      ? [this.selectListCmp.selectedListItem]
      : [];

    this.selectListCmp.onSelectedItemsChange(selected);
  }
}
