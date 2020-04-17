import {
  Injectable
} from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { StoreService } from '@app/models/store.service';

@Injectable()
export class StoreRouteResolver implements Resolve<any> {

  constructor(private storeService: StoreService) {}

  resolve() {
    return this.storeService.getProducts();
  }

}
