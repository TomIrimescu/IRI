import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
// import { Cart } from './cart.model';
// import { Order } from './order.model';
// const PROTOCOL = 'http';
// const PORT = 5000;
@Injectable()
export class RestDataSource {
  baseUrl: string;
  constructor(private http: HttpClient) {
    // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/iri-store/`;
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/iri-store/products');
  }
  // saveOrder(order: Order): Observable<Order> {
  // return this.http.post<Order>(this.baseUrl + 'orders', order);
  // }
}
