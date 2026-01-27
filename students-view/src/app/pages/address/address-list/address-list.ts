import { Component, computed, OnInit, signal, inject  } from '@angular/core';
import { Address } from '../../../interface/address';
import { RouterLink } from "@angular/router";
import { GetRequest } from '../../../services/read/get-request';
import { Modal } from '../../../components/modal/modal';
import { Dialog } from '@angular/cdk/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-address-list',
  imports: [RouterLink],
  templateUrl: './address-list.html',
  styleUrl: './address-list.css',
})
export class AddressList implements OnInit {
  address_signal = signal<Address[]>([]);
  public address_computed = computed(() => this.address_signal());

  private modal = inject(Dialog);

  pipe = new DatePipe('en-US');
  
  constructor(
    public get_request: GetRequest
  ) { }

  ngOnInit() {
    this.get_request.getAddress().subscribe({
      next: (response: any) => {
        this.address_signal.set(response.address);
        //console.log(response.address);
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
            type: 'Address'
          }, disableClose: true
        });
    }
}
