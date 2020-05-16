import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  AuthService
} from '@app/admin/auth/auth.service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public modal = false;
  public jwtToken: any;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) {

    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  ngOnInit() {
    this.jwtToken = localStorage.getItem('authJwtToken');
  }

  login() {

    const val = this.form.value;

    this.auth.login(val.email, val.password)
      .subscribe(
        (reply: any) => {

          localStorage.setItem('authJwtToken',
            reply.authJwtToken);

          this.router.navigateByUrl('/admin/dashboard');

        },
        err => {
          this.modalToggleEvent();
        }
      );

  }

  logout() {
    localStorage.removeItem('authJwtToken');
    this.jwtToken = !this.jwtToken;
    this.router.navigateByUrl('/admin/auth');
  }

  modalToggleEvent() {
    this.modal = !this.modal;
  }

}
