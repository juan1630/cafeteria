import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './components/menu/dashboard/dashboard.component';
import { BitacoraPedidosComponent } from './components/lista-pedidos/bitacora-pedidos/bitacora-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BitacoraPedidosComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
