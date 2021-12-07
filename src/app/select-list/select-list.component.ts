import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { SelectListItemDefinition } from './select-list.interface';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
})
export class SelectListComponent implements OnInit {
  @Input()
  items: SelectListItemDefinition[] = [];

  @Input()
  allowFilter = false;

  @Output()
  selectedChange = new EventEmitter<SelectListItemDefinition[]>();

  searchTerm: string = '';
  search$ = new Subject<string>();

  filteredItems!: SelectListItemDefinition[];

  ngOnInit() {
    this.filteredItems = this.items;

    this.search$.subscribe(term => {
      this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(term));
    });
  }

  onListChange() {
    const selected = this.items.filter((item) => !!item.value);
    this.selectedChange.next(selected);
  }
}
