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
import { ArchivadosComponent } from './components/archivados/archivados.component';
import { ActivosComponent } from './components/activos/activos.component';
import { MagistradoComponent } from './components/magistrado/magistrado.component';
import { ResueltosComponent } from './components/resueltos/resueltos.component';



/**Admionistracion */
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { AbstractJsEmitterVisitor } from '@angular/compiler/src/output/abstract_js_emitter';
import { RecuperarComponent } from './components/recuperar/recuperar.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PgeneralComponent,
    NavComponent,
    ResolucionesComponent,
    InnovacionesComponent,
    CasosComponent,
    ResueltosComponent,
    MagistradoComponent,
    ActivosComponent,
    ArchivadosComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
