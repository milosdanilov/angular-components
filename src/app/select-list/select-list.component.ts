import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

import { SelectListItemDefinition } from './select-list.interface';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
})
export class SelectListComponent implements OnInit, AfterContentInit {
  @Input()
  items: SelectListItemDefinition[] = [];

  @Input()
  allowMultiple = true;

  @Output()
  selectedChange = new EventEmitter<SelectListItemDefinition[]>();

  @ContentChild('listItemTmpl')
  listItemTemplateRef!: TemplateRef<any>;

  @ContentChild('listItemType')
  listItemTypeTemplateRef!: TemplateRef<any>

  @ContentChild(FilterComponent)
  filterCmp!: FilterComponent;

  filteredItems!: SelectListItemDefinition[];

  selectedListItem!: SelectListItemDefinition | null;

  ngOnInit() {
    this.filteredItems = this.items;

    this.selectedListItem = this.items.find((item) => !!item.value) ?? null;
  }

  ngAfterContentInit() {
    if (this.filterCmp) {
      this.filterCmp.search$.subscribe((term) => {
        this.filteredItems = this.items.filter((item) =>
          item.name.toLowerCase().includes(term)
        );
      });
    }
  }

  onSelectedItemsChange(items: SelectListItemDefinition[]) {
    this.selectedChange.next(items);
  }

  onListChange() {
    const selected = this.items.filter((item) => !!item.value);
    this.selectedChange.next(selected);
  }
}
