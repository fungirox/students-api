import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpParameterCodec } from '@angular/common/http';
import { API_URL } from '../../resouces';

@Injectable({
  providedIn: 'root',
})
export class GetRequest {
  private http = inject(HttpClient);

  // S T U D E N T S 

  getStudents() {
    return this.http.get<{students: any[]}>(`${API_URL}students`, { responseType: 'json' })
  }

  getStudentById(id: string) {
    return this.http.get<{student: any[]}>(`${API_URL}students/show/${id}`, { responseType: 'json' })
  }

  // E M A I L S

  getEmails() {
    return this.http.get<{email: any[]}>(`${API_URL}email`, { responseType: 'json' })
  }
}
