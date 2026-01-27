import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressShow } from './address-show';

describe('AddressShow', () => {
  let component: AddressShow;
  let fixture: ComponentFixture<AddressShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
