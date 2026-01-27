import { Component, OnInit, computed, signal, inject, effect } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostRequest } from '../../../services/create/post-request';
import { Student } from '../../../interface/student';
import { GetRequest } from '../../../services/read/get-request';

@Component({
  selector: 'app-phone-create',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './phone-create.html',
  styleUrl: './phone-create.css',
})
export class PhoneCreate {

  student_signal = signal<Student[]>([]);
  public student_computed = computed(() => this.student_signal());

  constructor(
    public post_request: PostRequest,
    public get_request: GetRequest,
    private new_route: Router
  ) {

    effect(() => {
      const control = this.phone_form.get('phone_id');
      if (this.student_signal().length === 0) {
        control?.disable();
      } else {
        control?.enable();
      }
    });
  }

  fb = inject(NonNullableFormBuilder);
  phone_form = this.fb.group({
    phone: ['', { validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)] }],
    phone_type: ['cellphone'],
    country_code: ['', { validators: [Validators.required] }],
    area_code: ['', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(3)] }],
    student_id: ['', { validators: [Validators.required] }]
  });

  createPhone() {
    this.post_request.createPhone(this.phone_form.value).subscribe({
      next: (response: any) => {
        const phone_id = response.phone.id;
        this.phone_form.patchValue(response.phone);
        this.new_route.navigate([`/phone/show/${phone_id}`]);
      },
      error: (error) => console.error(error)
    });
  }

  ngOnInit(): void {
    this.get_request.getStudents().subscribe({
      next: (response: any) => {
        this.student_signal.set(response.students)
      },
      error: (error) => console.error(error)
    });

  }
}