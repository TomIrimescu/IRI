import {
  Injectable
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard {

  private authJwtToken = localStorage.getItem('authJwtToken');

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    if (!this.authJwtToken) {
      this.router.navigateByUrl('/admin/auth');
      return false;
    }
    return true;
  }
}
