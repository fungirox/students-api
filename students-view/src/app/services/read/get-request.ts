import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpParameterCodec } from '@angular/common/http';
import { API_URL } from '../../resouces';

@Injectable({
  providedIn: 'root',
})
export class GetRequest {
  private http = inject(HttpClient);

  getStudents() {
    return this.http.get<{students: any[]}>(`${API_URL}`, { responseType: 'json' })
  }

  getStudentById(id: string) {
    return this.http.get<{student: any[]}>(`${API_URL}show/${id}`, { responseType: 'json' })
  }
}
