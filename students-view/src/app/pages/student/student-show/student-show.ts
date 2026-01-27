import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { GetRequest } from '../../../services/read/get-request';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Student } from '../../../interface/student';
import { Dialog } from '@angular/cdk/dialog';
import { Modal } from '../../../components/modal/modal';

@Component({
  selector: 'app-student',
  imports: [RouterLink],
  templateUrl: './student-show.html',
  styleUrl: './student-show.css',
})
export class StudentShow implements OnInit {

  student_empty : Student = {
    id : '',
    first_name: '',
    middle_name : '',
    last_name : '',
    gender: '',
    created_at : '',
    updated_at : ''
  }; 

  student_signal = signal<Student>(this.student_empty);
  public actual_student = computed(() => this.student_signal());

  private modal = inject(Dialog);

  constructor(
    public get_request: GetRequest,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const student_id = this.route.snapshot.paramMap.get("id");
    this.get_request.getStudentById(student_id == null ? "0" : student_id).subscribe({

      next: (response: any) => {
        this.student_signal.set(response.student);
        console.log(response.student);
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
            type: 'Student'
          }, disableClose: true
        });
    }
}
 