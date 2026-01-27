import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Email } from '../../../interface/email';
import { GetRequest } from '../../../services/read/get-request';

@Component({
  selector: 'app-email-show',
  imports: [RouterLink],
  templateUrl: './email-show.html',
  styleUrl: './email-show.css',
})
export class EmailShow implements OnInit{
  email_empty : Email = {
    'id': '',
    'email': '',
    'email_type': '',
    'student_id': '',
    'student_first_name': '',
    'student_last_name': '',
    'created_at': '',
    'updated_at': ''
  };

  email_signal = signal<Email>(this.email_empty);
  public actual_email = computed(() => this.email_signal());

  constructor(
    public get_request: GetRequest,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const email_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getEmailById(email_id == null ? "0" : email_id).subscribe({
      next: (response: any) => {
        this.email_signal.set(response.email);
        console.log(response.email);
      },
      error: (error) => console.error(error)
    });

  }
}
