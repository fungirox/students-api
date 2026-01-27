import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneShow } from './phone-show';

describe('PhoneShow', () => {
  let component: PhoneShow;
  let fixture: ComponentFixture<PhoneShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
