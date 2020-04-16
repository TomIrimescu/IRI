import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public jwtToken: any;
  public links = false;
  public sidedrawer = false;
  public loggedInUser: string;

  constructor(
    private router: Router) {}

  ngOnInit() {
    this.jwtToken = localStorage.getItem('authJwtToken');
    this.loggedInUser = localStorage.getItem('loggedInUser');
  }

  linksToggleEvent() {
    this.links = !this.links;
  }

  sideDrawerToggleEvent() {
    this.sidedrawer = !this.sidedrawer;
  }

  logout() {
    localStorage.removeItem('authJwtToken');
    localStorage.removeItem('loggedInUser');
    this.router.navigateByUrl('/store');
  }

}
