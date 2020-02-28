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
  AdminComponent
} from './admin.component';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule],
  declarations: [AdminComponent],
  exports: [AdminComponent]
})

export class AdminModule { }
