import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Address } from '../../../interface/address';
import { GetRequest } from '../../../services/read/get-request';
import { Dialog } from '@angular/cdk/dialog';
import { Modal } from '../../../components/modal/modal';

@Component({
  selector: 'app-address-show',
  imports: [RouterLink],
  templateUrl: './address-show.html',
  styleUrl: './address-show.css',
})
export class AddressShow implements OnInit {

  address_empty: Address = {
    'id': '',
    'address_line': '',
    'city': '',
    'zip_postcode': '',
    'state': '',
    'student_id': '',
    'student_first_name': '',
    'student_last_name': '',
  };

  address_signal = signal<Address>(this.address_empty);
  public actual_address = computed(() => this.address_signal());

  private modal = inject(Dialog);

  constructor(
    public get_request: GetRequest,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const address_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getAddressById(address_id == null ? "0" : address_id).subscribe({
      next: (response: any) => {
        this.address_signal.set(response.address);
        // console.log(response.address);
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
