import { Component, OnInit } from '@angular/core';
import { Email } from '../../../interface/email';
import { RouterLink } from "@angular/router";
import { GetRequest } from '../../../services/read/get-request';

@Component({
  selector: 'app-email-list',
  imports: [RouterLink],
  templateUrl: './email-list.html',
  styleUrl: './email-list.css',
})
export class EmailList implements OnInit {

  emails: Email[] = [];

  constructor(
    public get_request: GetRequest
  ) { }

  ngOnInit() {
    this.get_request.getEmails().subscribe({
      next: (response: any) => {
        this.emails = response.emails
      },
      error: (error) => console.error(error)
    });
  }
}


