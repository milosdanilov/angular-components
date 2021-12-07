import { Component, Input, OnInit } from '@angular/core';
import { SelectListComponent } from '../select-list/select-list.component';
import { SelectListItemDefinition } from '../select-list/select-list.interface';

@Component({
  selector: 'app-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.scss'],
})
export class CheckboxItemComponent implements OnInit {
  @Input()
  item!: SelectListItemDefinition;

  constructor(public selectListCmp: SelectListComponent) {}

  ngOnInit(): void {}

  onListChange() {
    const selected = this.selectListCmp.items.filter((item) => !!item.value);
    this.selectListCmp.onSelectedItemsChange(selected);
  }
}
