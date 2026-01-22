import { Component, OnInit } from '@angular/core';
import { GetRequest } from '../../services/get-request';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-student',
  imports: [RouterLink],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student implements OnInit {

  student_data = {
    "id": "",
    "first_name": "",
    "middle_name": "",
    "last_name": "",
    "gender": ""
  };

  constructor(
    public get_request: GetRequest,
    private route: ActivatedRoute
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
}
