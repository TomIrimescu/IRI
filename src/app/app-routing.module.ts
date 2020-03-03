import {
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  AuthGuard
} from '@app/auth/authguard/auth.guard';
import {
  InterceptorService
} from '@app/auth/interceptor/interceptor.service';
import {
  ExternalApiComponent
} from '@app/external-api-test/external-api/external-api.component';
import {
  PageNotFoundComponent
} from '@app/page-not-found/page-not-found.component';
import {
  ProfileComponent
} from '@app/profile/profile.component';
import {
  StoreComponent
} from '@app/store/store.component';

const routes: Routes = [
  {
    path: '', component: StoreComponent,
    data: { title: 'IRI Store' }
  },
  {
    path: 'profile', component: ProfileComponent, pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { title: 'Profile' }
  },
  {
    path: 'external-api', component: ExternalApiComponent,
    canActivate: [AuthGuard],
    data: { title: 'Ping IRI-API' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
    canActivate: [AuthGuard]
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
