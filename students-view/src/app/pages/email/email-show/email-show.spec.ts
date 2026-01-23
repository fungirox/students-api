import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailShow } from './email-show';

describe('EmailShow', () => {
  let component: EmailShow;
  let fixture: ComponentFixture<EmailShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
