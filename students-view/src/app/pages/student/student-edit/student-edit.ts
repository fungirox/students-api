import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GetRequest } from '../../../services/read/get-request';
import { UpdateRequest } from '../../../services/update/update-request';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../interface/student';

@Component({
  selector: 'app-student-edit',
  imports: [FormsModule, RouterLink],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit implements OnInit {

  student_empty : Student = {
    id : '',
    first_name: '',
    middle_name : '',
    last_name : '',
    gender: ''
  }; 

  student = signal<Student>(this.student_empty);
  public actual_student = computed(() => this.student());

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
        const student = response.student
        this.student.set(response.student);
      },
      error: (error) => console.error(error)
    });

  }

  updateStudent() {
    this.update_request.updateStudent(this.student().id, this.student()).subscribe({
      next: (response: any) => {
        const student = response.student
        this.new_route.navigate([`/student/show/${student["id"]}`]);
      },
      error: (error) => console.error(error)
    });
  }
}


