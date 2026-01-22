import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  imports: [FormsModule],
  templateUrl: './student-create.html',
  styleUrl: './student-create.css',
})
export class StudentCreate {
  // hacer modelo para student 
    student_data = {
    "id": "",
    "first_name": "",
    "middle_name": "",
    "last_name": "",
    "gender": ""
  };

  createStudent(){
    
  }
}
 