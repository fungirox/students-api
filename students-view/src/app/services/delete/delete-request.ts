import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../resouces';

@Injectable({
  providedIn: 'root',
})
export class DeleteRequest {
  private http = inject(HttpClient);

  // S T U D E N T S 
  deleteStudentById(id: string) {
    return this.http.delete(`${API_URL}students/${id}`, { responseType: 'json' })
  }

   // E M A I L S
  deleteEmailById(id: string) {
    return this.http.delete(`${API_URL}email/${id}`, { responseType: 'json' })
  }

  // P H O N E S
  deletePhoneById(id: string) {
    return this.http.delete(`${API_URL}phone/${id}`, { responseType: 'json' })
  }

   // A D D R E S S E S 
  deleteAddressById(id: string) {
    return this.http.delete(`${API_URL}address/${id}`, { responseType: 'json' })
  }
}
