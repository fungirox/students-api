import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostRequest } from '../../../services/create/post-request';
import { Email } from '../../../interface/email';

@Component({
  selector: 'app-email-create',
  imports: [FormsModule, RouterLink],
  templateUrl: './email-create.html',
  styleUrl: './email-create.css',
})
export class EmailCreate {
  email : Email = {
    'id': '',
    'email': '',
    'email_type': '',
    'student_id': '',
    'student_first_name': '',
    'student_last_name': ''
  };

  constructor(
    public post_request: PostRequest,
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
}