import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEdit } from './email-edit';

describe('EmailEdit', () => {
  let component: EmailEdit;
  let fixture: ComponentFixture<EmailEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
