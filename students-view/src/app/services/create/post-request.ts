import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '../../resouces';

@Injectable({
  providedIn: 'root',
})
export class PostRequest {
  private http = inject(HttpClient);

  // S T U D E N T S
  createStudent(student: any) {
    return this.http.post(`${API_URL}students/`, student)
  }

  // E M A I L S
  createEmail(email: any) {
    return this.http.post(`${API_URL}email/`, email)
  }

  // P H O N E S
  createPhone(phone: any) {
    return this.http.post(`${API_URL}phone/`, phone)
  }

  // A D D R E S S E S
  createAddress(address: any) {
    return this.http.post(`${API_URL}address/`, address)
  }
}
