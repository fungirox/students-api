import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '../../resouces';

@Injectable({
  providedIn: 'root',
})
export class PostRequest {
  private http = inject(HttpClient);

  createStudent(student: any) {
    return this.http.post(`${API_URL}students/`, student)
  }
}
