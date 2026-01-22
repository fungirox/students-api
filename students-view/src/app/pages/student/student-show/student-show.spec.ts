import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentShow } from './student-show';

describe('StudentShow', () => {
  let component: StudentShow;
  let fixture: ComponentFixture<StudentShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
