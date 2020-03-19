/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart.summaryComponent } from './cart.summary.component';

describe('Cart.summaryComponent', () => {
  let component: Cart.summaryComponent;
  let fixture: ComponentFixture<Cart.summaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart.summaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart.summaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
