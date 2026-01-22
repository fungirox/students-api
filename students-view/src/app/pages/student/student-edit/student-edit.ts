import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GetRequest } from '../../../services/get-request';
import { UpdateRequest } from '../../../services/update/update-request';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  imports: [FormsModule],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit implements OnInit {

  student_data = {
    "id": "",
    "first_name": "",
    "middle_name": "",
    "last_name": "",
    "gender": ""
  };

  constructor(
    public get_request: GetRequest,
    private route: ActivatedRoute,
    public update_request: UpdateRequest
  ) { }

  ngOnInit() {
    const student_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getStudentById(student_id == null ? "0" : student_id).subscribe({

      next: (response: any) => {
        const student = response.student
        this.student_data["id"] = student["id"]
        this.student_data["first_name"] = student["first_name"]
        this.student_data["middle_name"] = student["middle_name"]
        this.student_data["last_name"] = student["last_name"]
        this.student_data["gender"] = student["gender"]
      },
      error: (error) => console.error(error)
    });

  }

  updateStudent(id: string) {
    this.update_request.updateStudent(id, this.student_data).subscribe({
      next: (response) => {
        console.log("everything is goooood !!");
      },
      error: (error) => console.error(error)
    });
  }
}


