import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Iproduct } from './../../models/product';

import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: Iproduct[];
  myControl = new FormControl();

  constructor(private service: SearchService) {}

  ngOnInit(): void {
    this.myControl.valueChanges
      .pipe(
        filter((res) => res.length > 1),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((text) => this.service.getProtucts(text))
      )
      .subscribe((result) => (this.products = result));
  }
}
