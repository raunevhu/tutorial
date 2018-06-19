/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TUTTORIALComponent } from './tuttorial.component';

describe('TUTTORIALComponent', () => {
  let component: TUTTORIALComponent;
  let fixture: ComponentFixture<TUTTORIALComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TUTTORIALComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TUTTORIALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
