/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { INSTALLATIONComponent } from './installation.component';

describe('INSTALLATIONComponent', () => {
  let component: INSTALLATIONComponent;
  let fixture: ComponentFixture<INSTALLATIONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INSTALLATIONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INSTALLATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
