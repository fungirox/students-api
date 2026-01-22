import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetRequest } from '../../../services/read/get-request';
import { UpdateRequest } from '../../../services/update/update-request';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../interface/student';

@Component({
  selector: 'app-student-edit',
  imports: [FormsModule],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit implements OnInit {

  student : Student = {
    'id': '',
    'first_name': '',
    'middle_name': '',
    'last_name': '',
    'gender': ''
  };

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
        this.student["id"] = student["id"]
        this.student["first_name"] = student["first_name"]
        this.student["middle_name"] = student["middle_name"]
        this.student["last_name"] = student["last_name"]
        this.student["gender"] = student["gender"]
      },
      error: (error) => console.error(error)
    });

  }

  updateStudent() {
    this.update_request.updateStudent(this.student["id"], this.student).subscribe({
      next: (response) => {
        this.new_route.navigate(['/']);
      },
      error: (error) => console.error(error)
    });
  }
}


