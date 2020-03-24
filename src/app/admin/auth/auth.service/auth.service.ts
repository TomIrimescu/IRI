import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  PORT, PROTOCOL
} from '@app/models/constants';
import {
  User
} from '@app/models/user/user.model';
import {
  Observable
} from 'rxjs';

@Injectable()
export class AuthService {
  baseUrl: string;
  authToken: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'login', { email, password });
  }

}
