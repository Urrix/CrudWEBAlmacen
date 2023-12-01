import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  dataInventario:any[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/dataInventario').subscribe((dataInventario)=> {
        this.dataInventario=dataInventario;
      })
  }

}
