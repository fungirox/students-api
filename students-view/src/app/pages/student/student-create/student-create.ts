import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Form, FormBuilder, FormGroup, FormsModule, NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostRequest } from '../../../services/create/post-request';
import { Student } from '../../../interface/student';

@Component({
  selector: 'app-student-create',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './student-create.html',
  styleUrl: './student-create.css',
})
export class StudentCreate {

  constructor(
    public post_request: PostRequest,
    private new_route: Router
  ) { }

  fb = inject(NonNullableFormBuilder);
  student_form = this.fb.group({
    first_name: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(45)] }],
    middle_name: ['', { validators: [Validators.minLength(2), Validators.maxLength(45)] }],
    last_name: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(45)] }],
    gender: ['f']
  });

  createStudent() {
    this.post_request.createStudent(this.student_form.value).subscribe({
      next: (response: any) => {
        const student_id = response.student.id;
        this.student_form.patchValue(response.student);
        this.new_route.navigate([`/student/show/${student_id}`]);
      },
      error: (error) => console.error(error)
    });
  }
}
