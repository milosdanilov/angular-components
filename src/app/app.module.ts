import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';

import { SelectListComponent } from './select-list/select-list.component';
import { RadioItemComponent } from './radio-item/radio-item.component';

@NgModule({
  declarations: [AppComponent, SelectListComponent, FilterComponent, RadioItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
