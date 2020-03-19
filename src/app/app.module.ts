import {
  HttpClientModule
} from '@angular/common/http';
import {
  NgModule
} from '@angular/core';
import {
  BrowserModule,
  Title
} from '@angular/platform-browser';
import {
  AdminModule
} from '@app/admin/admin.module';
import {
  AppRoutingModule
} from '@app/app-routing.module';
import {
  AppComponent
} from '@app/app.component';
import {
  ExternalApiComponent
} from '@app/external-api-test/external-api/external-api.component';
import {
  StoreModule
} from '@app/store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    ExternalApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule,
    AdminModule
  ],
  providers: [
    Title
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
