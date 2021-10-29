import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PgeneralComponent } from './components/pgeneral/pgeneral.component';

import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResolucionesComponent } from './components/resoluciones/resoluciones.component';
import { InnovacionesComponent } from './components/innovaciones/innovaciones.component';
import { CasosComponent } from './components/casos/casos.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PgeneralComponent,
    NavComponent,
    ResolucionesComponent,
    InnovacionesComponent,
    CasosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
