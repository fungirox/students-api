import { Component, OnInit, computed, signal, inject, effect } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostRequest } from '../../../services/create/post-request';
import { Email } from '../../../interface/email';
import { Student } from '../../../interface/student';
import { GetRequest } from '../../../services/read/get-request';

@Component({
  selector: 'app-email-create',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './email-create.html',
  styleUrl: './email-create.css',
})
export class EmailCreate implements OnInit {

  student = signal<Student[]>([]);
  public students = computed(() => this.student());

  constructor(
    public post_request: PostRequest,
    public get_request: GetRequest,
    private new_route: Router
  ) {

    effect(() => {
      const control = this.email_form.get('student_id');
      if (this.students().length === 0) {
        control?.disable();
      } else {
        control?.enable();
      }
    });
  }

  fb = inject(NonNullableFormBuilder);
  email_form = this.fb.group({
    email: ['', { validators: [Validators.required, Validators.email, Validators.maxLength(100)] }],
    email_type: ['personal'],
    student_id: ['', { validators: [Validators.required] }]
  });

  createEmail() {
    this.post_request.createEmail(this.email_form.value).subscribe({
      next: (response: any) => {
        const email_id = response.email.id;
        this.email_form.patchValue(response.email);
        this.new_route.navigate([`/email/show/${email_id}`]);
      },
      error: (error) => console.error(error)
    });
  }

  ngOnInit(): void {
    this.get_request.getStudents().subscribe({
      next: (response: any) => {
        this.student.set(response.students)
      },
      error: (error) => console.error(error)
    });

  }
}