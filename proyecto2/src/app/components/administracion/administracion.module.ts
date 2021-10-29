import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RegistroMagistradoComponent } from './registro-magistrado/registro-magistrado.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormMagistradoComponent} from './form-magistrado/form-magistrado.component'
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListaMagistradosComponent } from './lista-magistrados/lista-magistrados.component';
import { EditarMagistradoComponent } from './editar-magistrado/editar-magistrado.component';
import { BajaMagistradoComponent } from './baja-magistrado/baja-magistrado.component';
import { EdicionGeneralComponent } from './edicion-general/edicion-general.component';
import { SubirBoletinComponent } from './subir-boletin/subir-boletin.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    FormMagistradoComponent,
    RegistroMagistradoComponent,
    SidebarComponent,
    ListaMagistradosComponent,
    EditarMagistradoComponent,
    BajaMagistradoComponent,
    EdicionGeneralComponent,
    SubirBoletinComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdministracionModule { }
