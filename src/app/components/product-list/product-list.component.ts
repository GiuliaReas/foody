import { Iproduct } from '../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() product: Iproduct;
  displayedColumns = ['nutriments', 'product1'];

  constructor() {}

  ngOnInit(): void {}
}
