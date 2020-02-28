import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  AdminComponent
} from '@app/admin/admin.component';
import {
  AppRoutingModule
} from '@app/app-routing.module';
import {
  AppComponent
} from '@app/app.component';
import {
  PageNotFoundComponent
} from '@app/page-not-found/page-not-found.component';
import {
  ProfileComponent
} from '@app/profile/profile.component';
import {
  StoreModule
} from '@app/store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
