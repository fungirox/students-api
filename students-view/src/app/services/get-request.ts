import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpParameterCodec } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetRequest {
  private http = inject(HttpClient);

  api_url = "http://127.0.0.1:8000/api/";

  students: any[] = [];

  getStudents() {
    return this.http.get<{students: any[]}>(this.api_url + 'students', { responseType: 'json' }).subscribe({
      next: (response) => { 
        this.students = response.students
       },
      error: (error) => console.error(error)
    });
  }

  getStudentById(id: number) {
    this.http.get(this.api_url + 'students/show/' + id, { responseType: 'json' }).subscribe((students) => {
      console.log('flins');
    });
  }
}
