import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '../../resouces';

@Injectable({
  providedIn: 'root',
})
export class UpdateRequest {
  private http = inject(HttpClient);

  
  updateStudent(id: any, student: any) {
    return this.http.put(`${API_URL}students/${id}`, student)
  }
}
