import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InventarioComponent } from './inventario/inventario.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ComprasComponent } from './compras/compras.component';
import { NavbarAdmiComponent } from './navbar-admi/navbar-admi.component';
import { NavbarClienteComponent } from './navbar-cliente/navbar-cliente.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    ComprasComponent,
    NavbarAdmiComponent,
    NavbarClienteComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
