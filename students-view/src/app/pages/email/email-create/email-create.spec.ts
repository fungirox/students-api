import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCreate } from './email-create';

describe('EmailCreate', () => {
  let component: EmailCreate;
  let fixture: ComponentFixture<EmailCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
