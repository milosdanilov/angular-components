import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  searchTerm: string = '';
  search$ = new Subject<string>();
}
