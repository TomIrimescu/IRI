import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Cart } from './cart.model';
// import { Order } from './order.model';
import { map } from 'rxjs/operators';
import { Product } from './product/product.model';

const PROTOCOL = 'http';
const PORT = 3000;
@Injectable()
export class RestDataSource {
  baseUrl: string;
  authToken: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
  }

  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>('/api/products');
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
  // saveOrder(order: Order): Observable<Order> {
  // return this.http.post<Order>(this.baseUrl + 'orders', order);
  // }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'login', {
    // return this.http.post<any>('/api/login', {
      name: user, password: pass
    }).pipe(map(response => {
      this.authToken = response.success ? response.token : null;
      return response.success;
    }));
  }

}
