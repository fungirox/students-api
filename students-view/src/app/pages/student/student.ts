import { Component, OnInit } from '@angular/core';
import { GetRequest } from '../../services/get-request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student implements OnInit{
  
  constructor (public get_request:GetRequest, private route:ActivatedRoute){
    
  }

  ngOnInit() {
    const student_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getStudentById(student_id == null ? "0" : student_id);
  }
}
