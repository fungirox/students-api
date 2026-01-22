import { Component, OnInit } from '@angular/core';
import { GetRequest } from '../../services/read/get-request';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  students: any[] = [];

  constructor(
    public get_request: GetRequest
  ) { }

  ngOnInit(): void {
    this.get_request.getStudents().subscribe({
      next: (response) => {
        this.students = response.students
      },
      error: (error) => console.error(error)
    });
  }



}
  