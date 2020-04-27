import {
  Component,
  OnInit
} from '@angular/core';
import {
  createProduct,
  deleteProduct,
  queryProducts,
  updateProduct
} from '@app/global-query';
import { Product } from '@app/types';
import { Query } from '@app/types';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// tslint:disable: object-literal-shorthand

@Component({
  selector: 'app-crud-test',
  templateUrl: './crud-test.component.html',
  styleUrls: ['./crud-test.component.scss']
})
export class CrudTestComponent implements OnInit {
  products: Observable<Product[]>;
  product: Observable<Product>;
  name: any;
  category: any;
  description: any;
  price: any;
  nameUpdate: any;
  categoryUpdate: any;
  descriptionUpdate: any;
  priceUpdate: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {

    this.products = this.apollo
      .watchQuery<Query>({
      query: queryProducts
    })
      .valueChanges.pipe(map(result => result.data.products));
  }

  createProduct(name, category, description, price): Observable<Product> {
    alert(description);
    return this.apollo
      .mutate({
        mutation: createProduct,
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
        map(({ data }: any) => data.createProduct)
        // catchError(handleError)
      );
  }

  updateProduct(
    idUpdate,
    nameUpdate,
    categoryUpdate,
    descriptionUpdate,
    priceUpdate): Observable<Product> {
    alert(idUpdate);
    return this.apollo
      .mutate({
        mutation: updateProduct,
        variables: {
          id: idUpdate,
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
        map(({ data }: any) => data.updateUser)
        // catchError(handleError)
      );
  }

  deleteProduct(id: string): Observable<boolean> {
    alert(id);
    return this.apollo
      .mutate({
        mutation: deleteProduct,
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
        map(({ data }: any) => data.deleteProduct)
        // catchError(handleError)
      );
  }

}
