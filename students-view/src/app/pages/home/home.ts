import { Component, OnInit, computed, signal, inject } from '@angular/core';
import { GetRequest } from '../../services/read/get-request';
import { RouterLink } from "@angular/router";
import { Student } from '../../interface/student';
import { Modal } from '../../components/modal/modal';
import { Dialog } from '@angular/cdk/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  student = signal<Student[]>([]);
  public students = computed(() => this.student());

  totalStudents = signal<number>(0);
  public total = computed(() => this.totalStudents());

  private modal = inject(Dialog);

  pipe = new DatePipe('en-US');

  constructor(
    public get_request: GetRequest
  ) { }

  ngOnInit(): void {
    this.get_request.getStudents().subscribe({
      next: (response) => {
        this.student.set(response.students);
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
