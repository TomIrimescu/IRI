import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  AuthService
} from '@app/admin/auth/auth.service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  logout() {

    localStorage.removeItem('authJwtToken');

    this.router.navigateByUrl('/admin/auth');
  }

  ngOnInit() {
  }

}
