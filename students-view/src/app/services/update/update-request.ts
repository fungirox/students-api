import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '../../resouces';

@Injectable({
  providedIn: 'root',
})
export class UpdateRequest {
  private http = inject(HttpClient);

  // S T U D E N T S
  updateStudent(id: any, student: any) {
    return this.http.put(`${API_URL}students/${id}`, student);
  }

  // E M A I L S
  updateEmail(id: any, email: any) {
    return this.http.put(`${API_URL}email/${id}`, email);
  }

  // P H O N E S
  updatePhone(id: any, phone: any) {
    return this.http.put(`${API_URL}phone/${id}`, phone);
  }
  
  // A D D R E S S E S
  updateAddress(id: any, address: any) {
    return this.http.put(`${API_URL}address/${id}`, address);
  }

}

