import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GetRequest } from '../../../services/read/get-request';
import { UpdateRequest } from '../../../services/update/update-request';
import { FormsModule, ReactiveFormsModule, Validators, NonNullableFormBuilder} from '@angular/forms';
import { Student } from '../../../interface/student';

@Component({
  selector: 'app-student-edit',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit implements OnInit {

  student_exist : boolean = true;

  fb = inject(NonNullableFormBuilder);
  student_form = this.fb.group({
    id: [''],
    first_name: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(45)] }],
    middle_name: ['', { validators: [Validators.minLength(2), Validators.maxLength(45)] }],
    last_name: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(45)] }],
    gender: ['']
  });

  constructor(
    public get_request: GetRequest,
    private route: ActivatedRoute,
    private new_route: Router,
    public update_request: UpdateRequest
  ) { }

  ngOnInit() {
    const student_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getStudentById(student_id == null ? "0" : student_id).subscribe({
      next: (response: any) => {
        this.student_form.patchValue(response.student);
      },
      error: (error) => {
        console.error(error);
        this.student_exist = false;
      }
    });

  }

  updateStudent() {
    const student_id = this.route.snapshot.paramMap.get("id");
    this.update_request.updateStudent(student_id == null ? "0" : student_id, this.student_form.value).subscribe({
      next: (response: any) => {
        const student_id = response.student.id;
        this.student_form.patchValue(response.student);
        this.new_route.navigate([`/student/show/${student_id}`]);
      },
      error: (error) => console.error(error)
    });
  }
}


