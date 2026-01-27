import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Phone } from '../../../interface/phone';
import { GetRequest } from '../../../services/read/get-request';
import { Dialog } from '@angular/cdk/dialog';
import { Modal } from '../../../components/modal/modal';
@Component({
  selector: 'app-phone-show',
  imports: [RouterLink],
  templateUrl: './phone-show.html',
  styleUrl: './phone-show.css',
})
export class PhoneShow implements OnInit {

  phone_empty: Phone = {
    'id': '',
    'phone': '',
    'phone_type': '',
    'country_code': '',
    'area_code': '',
    'student_id': '',
    'student_first_name': '',
    'student_last_name': '',
    'created_at': '',
    'updated_at': ''
  };

  phone_signal = signal<Phone>(this.phone_empty);
  public actual_phone = computed(() => this.phone_signal());

  private modal = inject(Dialog);

  constructor(
    public get_request: GetRequest,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const phone_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getPhoneById(phone_id == null ? "0" : phone_id).subscribe({
      next: (response: any) => {
        this.phone_signal.set(response.phone);
        // console.log(response.phone);
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
