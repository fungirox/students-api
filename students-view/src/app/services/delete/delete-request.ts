import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
}
