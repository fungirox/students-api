import { Component, OnInit, computed, signal, inject, effect } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, NonNullableFormBuilder} from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Email } from '../../../interface/email';
import { Student } from '../../../interface/student';
import { GetRequest } from '../../../services/read/get-request';
import { UpdateRequest } from '../../../services/update/update-request';


@Component({
  selector: 'app-email-edit',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './email-edit.html',
  styleUrl: './email-edit.css',
})
export class EmailEdit implements OnInit {

  student = signal<Student[]>([]);
  public students = computed(() => this.student());

  constructor(
    public update_request: UpdateRequest,
    private route: ActivatedRoute,
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

  updateEmail() {
    const email_id = this.route.snapshot.paramMap.get("id");
    this.update_request.updateEmail(email_id == null ? "0" : email_id, this.email_form.value).subscribe({
      next: (response: any) => {
        const email_id = response.email.id;
        this.email_form.patchValue(response.email);
        this.new_route.navigate([`/email/show/${email_id}`]);
      },
      error: (error) => console.error(error)
    });
  }

  ngOnInit(): void {
    const email_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getEmailById(email_id == null ? "0" : email_id).subscribe({
      next: (response: any) => {
        this.email_form.patchValue(response.email);
      },
      error: (error) => console.error(error)
    });
    this.get_request.getStudents().subscribe({
      next: (response: any) => {
        this.student.set(response.students)
      },
      error: (error) => console.error(error)
    });

  }
}