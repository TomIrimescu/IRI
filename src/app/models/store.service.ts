import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  PORT,
  PROTOCOL
} from '@app/models/constants';
// import {
//   Order
// } from './order.model';
import {
  Product
} from '@app/models/product/product.model';
import {
  Observable
} from 'rxjs';

@Injectable()
export class StoreService {
  baseUrl: string;

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

}
