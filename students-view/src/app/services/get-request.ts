import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpParameterCodec } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetRequest {
  private http = inject(HttpClient);

  api_url = "http://127.0.0.1:8000/api/students/";

  getStudents() {
    return this.http.get<{students: any[]}>(`${this.api_url}`, { responseType: 'json' })
  }

  getStudentById(id: string) {
    return this.http.get<{student: any[]}>(`${this.api_url}show/${id}`, { responseType: 'json' })
  }
}
