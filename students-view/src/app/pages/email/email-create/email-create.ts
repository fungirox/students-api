import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostRequest } from '../../../services/create/post-request';
import { Email } from '../../../interface/email';
import { Student } from '../../../interface/student';
import { GetRequest } from '../../../services/read/get-request';

@Component({
  selector: 'app-email-create',
  imports: [FormsModule, RouterLink],
  templateUrl: './email-create.html',
  styleUrl: './email-create.css',
})
export class EmailCreate implements OnInit {
  // Aquí no puse signal porque no necesito ver este objeto solo enviarlo y no veo la necesidad 
  // de cambiarlo
  email : Email = {
    'id': '',
    'email': '',
    'email_type': '',
    'student_id': '',
    'student_first_name': '',
    'student_last_name': ''
  };

  student = signal<Student[]>([]);
  public students = computed(() => this.student());

  constructor(
    public post_request: PostRequest,
    public get_request: GetRequest,
    private new_route : Router
  ) { }

  createEmail(){
    this.post_request.createEmail(this.email).subscribe({
      next: (response: any) => {
        const email = response.email
        this.new_route.navigate([`/email/show/${email["id"]}`]);
      },
      error: (error) => console.error(error)
    });
  }

  ngOnInit(): void {
    this.get_request.getStudents().subscribe({
      next: (response: any) => {
        this.student.set(response.students)
      },
      error: (error) => console.error(error)
    });
  }
}