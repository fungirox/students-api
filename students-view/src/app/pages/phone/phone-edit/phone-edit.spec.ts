import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneEdit } from './phone-edit';

describe('PhoneEdit', () => {
  let component: PhoneEdit;
  let fixture: ComponentFixture<PhoneEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
