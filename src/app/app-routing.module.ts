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
  AuthGuard
} from '@app/auth/authguard/auth.guard';
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
  { path: '', component: StoreComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
