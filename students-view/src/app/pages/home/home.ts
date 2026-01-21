import { Component, OnInit } from '@angular/core';
import { GetRequest } from '../../services/get-request';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  constructor (public get_request: GetRequest) {
    
  }

  
  ngOnInit(): void {
    this.get_request.getStudents();
  }

}
