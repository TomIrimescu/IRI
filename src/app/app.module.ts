import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  BrowserModule,
  Title
} from '@angular/platform-browser';
import {
  AdminModule
} from '@app/admin/admin.module';
import {
  AuthInterceptor
} from '@app/admin/auth/auth.interceptor/auth.interceptor';
import {
  AppRoutingModule
} from '@app/app-routing.module';
import {
  AppComponent
} from '@app/app.component';
import {
  StoreModule
} from '@app/store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule,
    AdminModule
  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
