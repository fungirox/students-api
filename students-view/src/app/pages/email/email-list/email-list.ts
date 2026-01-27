import { Component, computed, OnInit, signal, inject } from '@angular/core';
import { Email } from '../../../interface/email';
import { RouterLink } from "@angular/router";
import { GetRequest } from '../../../services/read/get-request';
import { Modal } from '../../../components/modal/modal';
import { Dialog } from '@angular/cdk/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-email-list',
  imports: [RouterLink],
  templateUrl: './email-list.html',
  styleUrl: './email-list.css',
})
export class EmailList implements OnInit {

  email = signal<Email[]>([]);
  public emails = computed(() => this.email());

  private modal = inject(Dialog);

  pipe = new DatePipe('en-US');
  
  constructor(
    public get_request: GetRequest
  ) { }

  ngOnInit() {
    this.get_request.getEmails().subscribe({
      next: (response: any) => {
        this.email.set(response.emails);
        //this.emails = response.emails;
      },
      error: (error) => console.error(error)
    });
  }

  protected openDeleteModal(id: string, display_name: string) {
      this.modal.open(Modal,
        {
          data: {
            id: id,
            display_name: display_name,
            type: 'Email'
          }, disableClose: true
        });
    }
}


