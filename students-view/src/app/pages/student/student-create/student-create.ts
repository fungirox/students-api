import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostRequest } from '../../../services/create/post-request';
import { Student } from '../../../interface/student';

@Component({
  selector: 'app-student-create',
  imports: [FormsModule],
  templateUrl: './student-create.html',
  styleUrl: './student-create.css',
})
export class StudentCreate {
    student_data : Student = {
    'id': '',
    'first_name': '',
    'middle_name': '',
    'last_name': '',
    'gender': ''
  };

  constructor(
    public post_request: PostRequest,
    private new_route : Router
  ) { }

  createStudent(){
    this.post_request.createStudent(this.student_data).subscribe({
      next: (response: any) => {
        const student = response.student
        this.new_route.navigate([`/student/show/${student["id"]}`]);
      },
      error: (error) => console.error(error)
    });
  }
}
 