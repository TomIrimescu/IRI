import {
  Component,
  OnInit
} from '@angular/core';
import {
  createProduct as Create,
  deleteProduct as Delete,
  queryProduct as findOne,
  queryProducts,
  updateProduct as Update
} from '@app/global-query';
import {
  Apollo
} from 'apollo-angular';
import {
  Observable
} from 'rxjs';
import {
  throwError
} from 'rxjs';
import {
  catchError,
  map
} from 'rxjs/operators';

// tslint:disable: object-literal-shorthand
declare interface QueryProducts {
  products: Product[];
}

declare interface QueryProduct {
  product: Product;
}

declare interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-crud-test',
  templateUrl: './crud-test.component.html',
  styleUrls: ['./crud-test.component.scss']
})
export class CrudTestComponent implements OnInit {
  products: Observable<Product[]>;
  product: Observable<Product>;
  tomcat: Observable<Product>;

  name: any;
  category: any;
  description: any;
  price: any;

  idUpdate: any;
  nameUpdate: any;
  categoryUpdate: any;
  descriptionUpdate: any;
  priceUpdate: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {

    this.products = this.apollo
      .watchQuery<QueryProducts>({
      query: queryProducts
      })
      .valueChanges.pipe(map(result => result.data.products));
  }

  queryProduct(id): Observable<Product> {
  return this.tomcat = this.apollo
          .watchQuery<QueryProduct>({
          query: findOne,
          variables: {
            id
          },
          })
          .valueChanges.pipe(map(result => result.data.product));
  }

  confirmQueryProduct(id) {
    this.queryProduct(id)
    .subscribe(res => {
      console.log(res);
    });
  }

  createProduct(name, category, description, price): Observable<Product> {
    alert(description);
    return this.apollo
      .mutate({
        mutation: Create,
        variables: {
          name: name,
          category: category,
          description: description,
          price: price
        },
        refetchQueries: [
          {
            query: queryProducts
          }
        ]
      })
      .pipe(
        map(({ data }: any) => data.createProduct),
        catchError(this.handleError)
      );
  }

  updateProduct(
    nameUpdate,
    categoryUpdate,
    descriptionUpdate,
    priceUpdate): Observable<Product> {
    // alert(this.idUpdate);
    return this.apollo
      .mutate({
        mutation: Update,
        variables: {
          name: nameUpdate,
          category: categoryUpdate,
          description: descriptionUpdate,
          price: priceUpdate
        },
        refetchQueries: [
          {
            query: queryProducts
          }
        ]
      })
      .pipe(
        map(({ data }: any) => data.updateProduct),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: string): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: Delete,
        variables: {
          id
        },
        refetchQueries: [
          {
            query: queryProducts
          }
        ]
      })
      .pipe(
        map(({ data }: any) => data.deleteProduct),
        catchError(this.handleError)
      );
  }

  confirmDeleteProduct(id) {
    this.tomcat = null;
    this.deleteProduct(id)
      .subscribe(res => {
        console.log(res);
    });

  }

  handleError = (err: any) => {
    if (err.graphQLErrors) {
      let error = null;

      err.graphQLErrors.forEach((e: any) => {
        error = {
          message: e.extensions.exception.errors[0].message,
          path: e.extensions.exception.errors[0].path,
          type: e.extensions.exception.errors[0].type,
          value: e.extensions.exception.errors[0].value
        };
      });

      return throwError(error);
    }
    if (err.networkError) {
      return throwError(err);
    }
  }

}
