import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostRequest {
  private http = inject(HttpClient);

  api_url = "http://127.0.0.1:8000/api/students/";

  createStudent(student: any) {
    return this.http.post(`${this.api_url}`, student)
  }
}
