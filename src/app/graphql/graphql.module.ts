import {
  HttpClientModule
} from '@angular/common/http';
import {
  NgModule
} from '@angular/core';
import {
  Apollo,
  ApolloModule
} from 'apollo-angular';
import {
  HttpLink,
  HttpLinkModule
} from 'apollo-angular-link-http';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';
import {
  environment
} from 'environments/environment';
import {
  ProductService
} from './services/product.service';

const uri = `${environment.SERVER_URL}/graphql`;

@NgModule({
  providers: [ProductService],
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri }),
      cache: new InMemoryCache(),
    });
  }
}
