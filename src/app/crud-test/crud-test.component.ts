import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProductService
} from '@app/graphql/services/product.service';
import {
  IProduct
} from '@app/models/product/product.model';
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-crud-test',
  templateUrl: './crud-test.component.html'
})
export class CrudTestComponent implements OnInit {
  products: Observable<IProduct[]>;
  product: Observable<IProduct>;
  productView: Observable<IProduct>;

  name: any;
  category: any;
  description: any;
  price: any;

  id: any;
  nameU: any;
  categoryU: any;
  descriptionU: any;
  priceU: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.queryProducts();
  }

  queryProd(id) {
    this.productView = this.productService.queryProduct(id);
  }

  createProd(name, category, description, price) {
    alert(name + ' ' + category + ' ' + description + ' ' + price);
  }

  updateProd(id, nameU, categoryU, descriptionU, priceU) {
    alert(id + ' ' + nameU + ' ' + categoryU + ' ' + descriptionU + ' ' + priceU);
  }

  deleteProd(id) {
    this.productView = null;
    this.productService.deleteProduct(id)
      .subscribe(res => {
        console.log(res);
    });

  }

}
