import {
  Injectable
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {
  AuthService
} from '@app/admin/auth/auth.service/auth.service';

@Injectable()
export class AuthGuard {

  constructor(private router: Router,
              private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    if (!this.auth.authenticated) {
      this.router.navigateByUrl('/admin/auth');
      return false;
    }
    return true;
  }
}
