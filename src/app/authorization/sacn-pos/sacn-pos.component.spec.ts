import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacnPosComponent } from './sacn-pos.component';

describe('SacnPosComponent', () => {
  let component: SacnPosComponent;
  let fixture: ComponentFixture<SacnPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacnPosComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacnPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
