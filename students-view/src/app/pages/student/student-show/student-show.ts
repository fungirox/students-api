import { Component, OnInit } from '@angular/core';
import { GetRequest } from '../../../services/read/get-request';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Student } from '../../../interface/student';

@Component({
  selector: 'app-student',
  imports: [RouterLink],
  templateUrl: './student-show.html',
  styleUrl: './student-show.css',
})
export class StudentShow implements OnInit {

  student : Student = {
    'id': '',
    'first_name': '',
    'middle_name': '',
    'last_name': '',
    'gender': ''
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
        this.student["id"] = student["id"]
        this.student["first_name"] = student["first_name"]
        this.student["middle_name"] = student["middle_name"]
        this.student["last_name"] = student["last_name"]
        this.student["gender"] = student["gender"]
      },
      error: (error) => console.error(error)
    });

  }
}
