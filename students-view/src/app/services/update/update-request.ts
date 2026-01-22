import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdateRequest {
  private http = inject(HttpClient);

  api_url = "http://127.0.0.1:8000/api/students/";

  updateStudent(id: string, student: any) {
    return this.http.put(`${this.api_url}${id}`, student)
  }
}
