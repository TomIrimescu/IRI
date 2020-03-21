import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  RestDataSource
} from '@app/model/rest.datasource';
import {
  Observable
} from 'rxjs';
// import {User} from "./model/user.model";


@Injectable()
export class AuthService {

  constructor(private datasource: RestDataSource, private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.datasource.authToken != null;
  }

  clear() {
    this.datasource.authToken = null;
  }

  // login(email: string, password: string): Observable<User> {
  //   return this.http.post<User>('/api/login', { email, password });
  // }

  login(email: string, password: string): Observable<any> {
    return this.http.post('/api/login', { email, password });
  }

}
