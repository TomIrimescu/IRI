import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  RouterModule
} from '@angular/router';
import {
  ModelModule
} from '@app/model/model.module';
import {
  StoreComponent
} from '@app/store/store.component';
import {
  ClickOutsideModule
} from 'ng-click-outside';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ClickOutsideModule
  ],
  declarations: [StoreComponent],
  exports: [StoreComponent]
})

export class StoreModule { }
