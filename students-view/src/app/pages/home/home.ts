import { Component, OnInit, computed, signal } from '@angular/core';
import { GetRequest } from '../../services/read/get-request';
import { RouterLink } from "@angular/router";
import { Student } from '../../interface/student';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  student = signal<Student[]>([]);
  public students = computed(() => this.student());

  constructor(
    public get_request: GetRequest
  ) { }

  ngOnInit(): void {
    this.get_request.getStudents().subscribe({
      next: (response) => {
        this.student.set(response.students);
        //this.students = response.students
      },
      error: (error) => console.error(error)
    });
  }
}
  