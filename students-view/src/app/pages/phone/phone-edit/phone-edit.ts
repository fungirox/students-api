import { Component, OnInit, computed, signal, inject, effect } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, NonNullableFormBuilder} from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Phone } from '../../../interface/phone';
import { Student } from '../../../interface/student';
import { GetRequest } from '../../../services/read/get-request';
import { UpdateRequest } from '../../../services/update/update-request';

@Component({
  selector: 'app-phone-edit',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './phone-edit.html',
  styleUrl: './phone-edit.css',
})
export class PhoneEdit implements OnInit {

  student_signal = signal<Student[]>([]);
  public students = computed(() => this.student_signal());

  constructor(
    public update_request: UpdateRequest,
    private route: ActivatedRoute,
    public get_request: GetRequest,
    private new_route: Router
  ) {  
    effect(() => {
      const control = this.phone_form.get('student_id');
      if (this.students().length === 0) {
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

  updatePhone() {
    const phone_id = this.route.snapshot.paramMap.get("id");
    this.update_request.updatePhone(phone_id == null ? "0" : phone_id, this.phone_form.value).subscribe({
      next: (response: any) => {
        const phone_id = response.phone.id;
        this.phone_form.patchValue(response.phone);
        this.new_route.navigate([`/phone/show/${phone_id}`]);
      },
      error: (error) => console.error(error)
    });
  }

  ngOnInit(): void {
    const phone_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getPhoneById(phone_id == null ? "0" : phone_id).subscribe({
      next: (response: any) => {
        this.phone_form.patchValue(response.phone);
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