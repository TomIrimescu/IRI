import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  ExternalApiComponent
} from '@app/external-api-test/external-api/external-api.component';
import {
  PageNotFoundComponent
} from '@app/page-not-found/page-not-found.component';
import {
  StoreComponent
} from '@app/store/store.component';

const routes: Routes = [
  {
    path: '', component: StoreComponent,
    data: { title: 'IRI Store' }
  },
  {
    path: 'external-api', component: ExternalApiComponent,
    data: { title: 'Ping IRI-API' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
