import { Component } from '@angular/core';
import { Product } from '@app/model/product.model';
import { ProductRepository } from '@app/model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: 'store.component.html'
})
export class StoreComponent {
  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
}
