import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '../../resouces';

@Injectable({
  providedIn: 'root',
})
export class UpdateRequest {
  private http = inject(HttpClient);

  
  updateStudent(id: string, student: any) {
    return this.http.put(`${API_URL}${id}students/`, student)
  }
}
