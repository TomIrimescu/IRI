import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
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
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
