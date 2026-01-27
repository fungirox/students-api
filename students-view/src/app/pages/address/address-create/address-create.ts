import { Component, OnInit, computed, signal, inject, effect } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostRequest } from '../../../services/create/post-request';
import { Student } from '../../../interface/student';
import { GetRequest } from '../../../services/read/get-request';
@Component({
  selector: 'app-address-create',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './address-create.html',
  styleUrl: './address-create.css',
})
export class AddressCreate implements OnInit {
  student_signal = signal<Student[]>([]);
  public student_computed = computed(() => this.student_signal());

  constructor(
    public post_request: PostRequest,
    public get_request: GetRequest,
    private new_route: Router
  ) {

    effect(() => {
      const control = this.address_form.get('address_id');
      if (this.student_signal().length === 0) {
        control?.disable();
      } else {
        control?.enable();
      }
    });
  }

  fb = inject(NonNullableFormBuilder);
  address_form = this.fb.group({
    address_line: ['', { validators: [Validators.required, Validators.maxLength(100)] }],
    city: ['', { validators: [Validators.required, Validators.maxLength(45)] }],
    zip_postcode: ['', { validators: [Validators.required, Validators.maxLength(45)] }],
    state: ['', { validators: [Validators.required, Validators.maxLength(45)] }],
    student_id: ['', { validators: [Validators.required] }]
  });

  createAddress() {
    console.log(this.address_form.value);
    this.post_request.createAddress(this.address_form.value).subscribe({
      next: (response: any) => {
        const address_id = response.address.id;
        this.address_form.patchValue(response.address);
        this.new_route.navigate([`/address/show/${address_id}`]);
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

