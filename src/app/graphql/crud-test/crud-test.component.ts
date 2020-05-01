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
  ProductService
} from '@app/graphql/services/product.service';
import {
  IProduct
} from '@app/models/product/product.model';
import {
  Observable
} from 'rxjs';
import {
  finalize
} from 'rxjs/operators';

@Component({
  selector: 'app-crud-test',
  templateUrl: './crud-test.component.html'
})
export class CrudTestComponent implements OnInit {
  createProductForm: FormGroup;
  updateProductForm: FormGroup;
  products: Observable<IProduct[]>;
  product: Observable<IProduct>;
  productView: Observable<IProduct>;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder) {
      this.productCreateForm();
      this.productUpdateForm();
  }

  ngOnInit() {
    this.products = this.productService.queryProducts();
  }

  queryProd(id) {
    this.productView = this.productService.queryProduct(id);
  }

  deleteProd(id) {
    this.productView = null;
    this.productService.deleteProduct(id)
      .subscribe(res => {
        console.log(res);
    });
  }

  submit() {
    this.productService
      .createProduct(this.createProductForm.value)
      .pipe(
        finalize(() => {
          this.createProductForm.reset();
        })
      )
      .subscribe(res => {
          console.log(res);
      });
  }

  onSubmit(id) {
    this.productService
      .updateProduct(
        id,
        this.updateProductForm.value)
      .pipe(
        finalize(() => {
          this.updateProductForm.reset();
        })
      )
      .subscribe(res => {
          console.log(res);
      });
  }

  clear() {
    this.productView = null;
    this.createProductForm.reset();
    this.updateProductForm.reset();
  }

  private productCreateForm() {
    this.createProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  private productUpdateForm() {
    this.updateProductForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

}
