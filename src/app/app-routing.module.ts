import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  AdminComponent
} from '@app/admin/admin.component';
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
  { path: 'admin', component: AdminComponent },
  { path: 'store', component: StoreComponent },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
