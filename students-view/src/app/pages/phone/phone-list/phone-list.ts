import { Component, computed, OnInit, signal, inject } from '@angular/core';
import { Phone } from '../../../interface/phone';
import { RouterLink } from "@angular/router";
import { GetRequest } from '../../../services/read/get-request';
import { Modal } from '../../../components/modal/modal';
import { Dialog } from '@angular/cdk/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-phone-list',
  imports: [RouterLink],
  templateUrl: './phone-list.html',
  styleUrl: './phone-list.css',
})
export class PhoneList implements OnInit {
  phone_signal = signal<Phone[]>([]);
  public phone_computed = computed(() => this.phone_signal());

  private modal = inject(Dialog);

  pipe = new DatePipe('en-US');
  
  constructor(
    public get_request: GetRequest
  ) { }

  ngOnInit() {
    this.get_request.getPhones().subscribe({
      next: (response: any) => {
        this.phone_signal.set(response.phones);
        console.log(response.phones);
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
            type: 'Phone'
          }, disableClose: true
        });
    }
}
