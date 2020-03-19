/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart.detailComponent } from './cart.detail.component';

describe('Cart.detailComponent', () => {
  let component: Cart.detailComponent;
  let fixture: ComponentFixture<Cart.detailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart.detailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart.detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
