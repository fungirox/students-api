import { Component, OnInit } from '@angular/core';
import { GetRequest } from '../../services/get-request';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
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
