import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Iproduct } from './../models/product';
import { Observable, of } from 'rxjs';
import { environment } from './../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  product: any;
  private searchUrl = environment.searchUrl;
  constructor(private http: HttpClient) {}

  getProtucts(value: string): Observable<Iproduct[]> {
    const params = new HttpParams()
      .set('search_terms', value)
      .set('search_simple', '1')
      .set('action', 'process')
      .set('json', 'true');
    return this.http
      .get<Iproduct[]>(this.searchUrl, { params })
      .pipe(
        map((data: any) =>
          data.products.map((products: any) => {
            return (this.product = {
              name: products?.product_name,
              thumbImmagine: products?.selected_images?.front?.thumb?.en,
              smlImmagine: products?.selected_images?.front?.small?.en,
              nutrimentsValues: products?.nutriments,
            });
          })
        )
        //catchError((error) => )
      );
  }
}
//search_terms=coca+cola&search_simple=1&action=process&json=true
