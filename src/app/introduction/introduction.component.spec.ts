/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { INTRODUCTIONComponent } from './introduction.component';

describe('INTRODUCTIONComponent', () => {
  let component: INTRODUCTIONComponent;
  let fixture: ComponentFixture<INTRODUCTIONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INTRODUCTIONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INTRODUCTIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
