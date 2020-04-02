import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import { Product } from '@app/models/product/product.model';
import { ProductRepository } from '@app/models/product/product.repository';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private repository: ProductRepository,
    private router: Router) { }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  logout() {
    localStorage.removeItem('authJwtToken');
    this.router.navigateByUrl('/admin/auth');
  }

  ngOnInit() {
  }

}
