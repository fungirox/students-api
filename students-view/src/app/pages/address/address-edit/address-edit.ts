import { Component, OnInit, computed, signal, inject, effect } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Address } from '../../../interface/address';
import { Student } from '../../../interface/student';
import { GetRequest } from '../../../services/read/get-request';
import { UpdateRequest } from '../../../services/update/update-request';

@Component({
  selector: 'app-address-edit',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './address-edit.html',
  styleUrl: './address-edit.css',
})
export class AddressEdit implements OnInit {

  student_signal = signal<Student[]>([]);
  public students = computed(() => this.student_signal());

  constructor(
    public update_request: UpdateRequest,
    private route: ActivatedRoute,
    public get_request: GetRequest,
    private new_route: Router
  ) {
    effect(() => {
      const control = this.address_form.get('student_id');
      if (this.students().length === 0) {
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

  updateAddress() {
    const address_id = this.route.snapshot.paramMap.get("id");
    this.update_request.updateAddress(address_id == null ? "0" : address_id, this.address_form.value).subscribe({
      next: (response: any) => {
        const address_id = response.address.id;
        this.address_form.patchValue(response.address);
        this.new_route.navigate([`/address/show/${address_id}`]);
      },
      error: (error) => console.error(error)
    });
  }

  ngOnInit(): void {
    const address_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getAddressById(address_id == null ? "0" : address_id).subscribe({
      next: (response: any) => {
        this.address_form.patchValue(response.address);
      },
      error: (error) => console.error(error)
    });
    this.get_request.getStudents().subscribe({
      next: (response: any) => {
        this.student_signal.set(response.students)
      },
      error: (error) => console.error(error)
    });

  }
}