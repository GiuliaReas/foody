import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Iproduct } from './../../models/product';

import { SearchService } from './../../services/search.service';
import { Subscription } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  products: Iproduct[];
  myControl = new FormControl();
  subscription: Subscription;
  selectedProduct: Iproduct[] = [];

  constructor(private service: SearchService) {}

  ngOnInit(): void {
    this.subscription = this.myControl.valueChanges
      .pipe(
        filter((res) => res.length > 1),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((text) => this.service.getProtucts(text))
      )
      .subscribe((result) => (this.products = result));
  }

  onSelectionChanged($event: MatAutocompleteSelectedEvent) {
    this.selectedProduct.push($event?.option?.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
