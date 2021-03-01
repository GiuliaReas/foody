import { Component, OnInit } from '@angular/core';

import { Iproduct } from './../../models/product';
import { Observable } from 'rxjs';
import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: Observable<Iproduct[]>;

  constructor(private service: SearchService) {}

  ngOnInit(): void {
    this.search('coca');
  }
  search(value: string): void {
    this.products = this.service.getProtucts(value);
  }
}
