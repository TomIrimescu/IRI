import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
// import {
//   PORT,
//   PREFIX,
//   PROTOCOL
// } from '@app/models/constants';
import {
  User
} from '@app/models/user/user.model';
import {
  environment
} from 'environments/environment';
import {
  Observable
} from 'rxjs';

@Injectable()
export class AuthService {
  // baseUrl: string;

  constructor(private http: HttpClient) {
    // this.baseUrl = `${environment.SERVER_URL}`;
  }

  login(email: string, password: string): Observable<User> {
    localStorage.setItem('loggedInUser', email);
    return this.http.post<User>(`${environment.SERVER_URL}` + '/api/login', { email, password });
  }

}
