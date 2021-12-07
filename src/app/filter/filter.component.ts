import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output()
  searchChange = new EventEmitter<string>();

  searchTerm: string = '';
  // search$ = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
