import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'conection';
  data: any[] = [];
  dataClientes: any[]=[];
  dataServicio:any[]=[];
  constructor(private http:HttpClient) {}

    ngOnInit():void {
      /* this.http.get<any[]>('http://localhost:3000/api/data').subscribe((data)=> {
        this.data=data;
      }) */

      //Api para dataClientes
      /* this.http.get<any[]>('http://localhost:3000/api/dataClientes').subscribe((dataClientes)=> {
        this.dataClientes=dataClientes;
      }) */
    }
  
}
