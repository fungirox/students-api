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

  getTotalStudents() {
    return this.http.get<{data: any[]}>(`${API_URL}students/total`, { responseType: 'json' })
  }

  // E M A I L S

  getEmails() {
    return this.http.get<{email: any[]}>(`${API_URL}email`, { responseType: 'json' })
  }

  getEmailById(id: string) {
    return this.http.get<{email: any[]}>(`${API_URL}email/show/${id}`, { responseType: 'json' })
  }

  // P H O N E S
  getPhones() {
    return this.http.get<{phone: any[]}>(`${API_URL}phone`, { responseType: 'json' })
  }

  getPhoneById(id: string) {
    return this.http.get<{phone: any[]}>(`${API_URL}phone/show/${id}`, { responseType: 'json' })
  }

  // A D D R E S S E S
  getAddress() {
    return this.http.get<{address: any[]}>(`${API_URL}address`, { responseType: 'json' })
  }

  getAddressById(id: string) {
    return this.http.get<{address: any[]}>(`${API_URL}address/show/${id}`, { responseType: 'json' })
  }
}
