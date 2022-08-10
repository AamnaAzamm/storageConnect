import { Component, OnInit } from '@angular/core';
import { Home } from './home';
import { HttpClient } from '@angular/common/http';

import dataStorage from '../mockData/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data : any = [];
  public fullData : any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(){
    // this.http.get('http://localhost:4200/storages').subscribe(data => {
    //   this.fullData = data;
    //   this.data = data;
    // });
    console.log(dataStorage);
    this.fullData = dataStorage.storages;
      this.data = dataStorage.storages;
  }

}
