import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  dataClientes: any[] = [];
  dataAutos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Cambia la URL para obtener datos de autos
    this.http.get<any[]>('http://localhost:3000/api/dataClientes').subscribe((dataClientes) => {
      this.dataClientes = dataClientes;

      // Asegúrate de cambiar la URL correcta para obtener datos de autos
      this.http.get<any[]>('http://localhost:3000/api/dataAutos').subscribe((dataAutos) => {
        this.dataAutos = dataAutos;
      });
    });
  }
}
