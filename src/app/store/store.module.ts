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
  ModelModule
} from '@app/model/model.module';
import {
  StoreComponent
} from '@app/store/store.component';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule],
  declarations: [StoreComponent],
  exports: [StoreComponent]
})

export class StoreModule { }
