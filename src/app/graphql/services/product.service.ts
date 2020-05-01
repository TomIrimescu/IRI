import {
  Injectable
} from '@angular/core';
import {
  createProduct as Create,
  deleteProduct as Delete,
  queryProduct as findOne,
  queryProducts as findAll,
  updateProduct as Update
} from '@app/graphql/operations/products-gql';
import {
  IProduct
} from '@app/models/product/product.model';
import {
  Apollo
} from 'apollo-angular';
import {
  Observable
} from 'rxjs';
import {
  catchError,
  map
} from 'rxjs/operators';
import {
  handleError
} from '../utilities/utilities';

// tslint:disable: object-literal-shorthand
declare interface QueryProducts {
  products: IProduct[];
}

declare interface QueryProduct {
  product: IProduct;
}

export interface ICreateProductContext {
  name: string;
  category: string;
  description: string;
  price: number;
}

@Injectable()
export class ProductService {
  products: Observable<IProduct[]>;
  product: Observable<IProduct>;

  constructor(private apollo: Apollo) { }

  queryProducts(): Observable<IProduct[]> {
    return this.apollo
      .watchQuery<QueryProducts>({
      query: findAll
      })
      .valueChanges.pipe(map(result => result.data.products));
  }

  queryProduct(id): Observable<IProduct> {
    return this.apollo
      .watchQuery<QueryProduct>({
      query: findOne,
        variables: {
          id
        },
      })
      .valueChanges.pipe(map(result => result.data.product));
  }

  createProduct(product: ICreateProductContext): Observable<IProduct> {
    return this.apollo
      .mutate({
        mutation: Create,
        variables: {
          ...product,
          name: product.name,
          category: product.category,
          description: product.description,
          price: product.price
        },
        refetchQueries: [
          {
            query: findAll
          }
        ]
      })
      .pipe(
        map(({ data }: any) => data.createProduct),
        catchError(handleError)
      );
  }

  updateProduct(id: string, product: IProduct): Observable<IProduct> {
    return this.apollo
      .mutate({
        mutation: Update,
        variables: {
          ...product,
          id: id,
          name: product.name,
          category: product.category,
          description: product.description,
          price: product.price
        },
        refetchQueries: [
          {
            query: findAll
          }
        ]
      })
      .pipe(
        map(({ data }: any) => data.updateProduct),
        catchError(handleError)
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
            query: findAll
          }
        ]
      })
      .pipe(
        map(({ data }: any) => data.deleteProduct),
        catchError(handleError)
      );
  }

}
