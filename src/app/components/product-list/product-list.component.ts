import { Iproduct } from '../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Iproduct[];
  displayedColumns = ['nutriments', 'product1', 'product2'];

  constructor() {}

  ngOnInit(): void {}
}
