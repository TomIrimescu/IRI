import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  ProductRepository
} from '@app/models/product/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: 'store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public products: any;
  public jwtToken: any;
  public links = false;
  public sidedrawer = false;
  public loggedInUser: string;

  constructor(
    private repository: ProductRepository,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.jwtToken = localStorage.getItem('authJwtToken');
    this.loggedInUser = localStorage.getItem('loggedInUser');
    this.products = this.route.snapshot.data;
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  linksToggleEvent() {
    this.links = !this.links;
  }

  onClickedOutside(e: Event) {
    this.links = false;
  }

  sideDrawerToggleEvent() {
    this.sidedrawer = !this.sidedrawer;
  }

  goToDashboard() {
    this.router.navigateByUrl('/admin/dashboard');
  }

  logout() {
    localStorage.removeItem('authJwtToken');
    localStorage.removeItem('loggedInUser');
    this.jwtToken = !this.jwtToken;
  }

}
