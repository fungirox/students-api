import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCreate } from './phone-create';

describe('PhoneCreate', () => {
  let component: PhoneCreate;
  let fixture: ComponentFixture<PhoneCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
