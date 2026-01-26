import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, Inject } from '@angular/core';
import { DeleteRequest } from '../../services/delete/delete-request';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  id : string;
  display_name : string;
  type : string;
  constructor(
    @Inject(DIALOG_DATA) public data:any,
    private delete_request : DeleteRequest
  ) { 
    this.id = data.id;
    this.display_name = data.display_name;
    this.type = data.type;
  }

  private dialogRef = inject(DialogRef, {optional: true});
  protected closeModal(){
    this.dialogRef?.close();
  }

  protected delete(){
    this.delete_request.deleteStudentById(this.id).subscribe({
      next: (response) => {
        this.closeModal();
        //this.student.set(response.students);
      },
      error: (error) => console.error(error)
    });
  }
}
