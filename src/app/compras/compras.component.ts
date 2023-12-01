import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  dataCompras:any[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/dataClientes').subscribe((dataCompras)=> {
      this.dataCompras=dataCompras;
    })
  }

}
