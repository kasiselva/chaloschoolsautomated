import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMasterComponent } from './field-master.component';

describe('FieldMasterComponent', () => {
  let component: FieldMasterComponent;
  let fixture: ComponentFixture<FieldMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
