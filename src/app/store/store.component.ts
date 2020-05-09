import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  ProductService
} from '@app/graphql/services/product.service';
import {
  IProduct
} from '@app/models/product/product.model';
import {
  ProductRepository
} from '@app/models/product/product.repository';
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: 'store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products: Observable<IProduct[]>;
  public jwtToken: any;
  public links = false;
  public sidedrawer = false;
  public loggedInUser: string;

  constructor(
    private productService: ProductService,
    private repository: ProductRepository,
    private router: Router) { }

  ngOnInit() {
    this.jwtToken = localStorage.getItem('authJwtToken');
    this.loggedInUser = localStorage.getItem('loggedInUser');
    this.products = this.productService.queryProducts();
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
