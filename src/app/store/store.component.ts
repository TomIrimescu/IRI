import {
  Component
} from '@angular/core';
import {
  Product
} from '@app/models/product/product.model';
import {
  ProductRepository
} from '@app/models/product/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: 'store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {

  public links = false;
  public sidedrawer = false;

  constructor(
    private repository: ProductRepository) { }

  get products(): Product[] {
    return this.repository.getProducts();
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

}
