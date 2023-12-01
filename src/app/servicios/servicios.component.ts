import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
dataServicio:any[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    //Api para los datos de servicio
    this.http.get<any[]>('http://localhost:3000/api/dataServicio').subscribe((dataServicio)=> {
        this.dataServicio=dataServicio;
      })
  }

}
