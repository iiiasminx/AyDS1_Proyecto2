import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatGeneralComponent } from './cat-general/cat-general.component';
/*
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { BajaMagistradoComponent } from './baja-magistrado/baja-magistrado.component';
import { EdicionGeneralComponent } from './edicion-general/edicion-general.component';
import { EditarMagistradoComponent } from './editar-magistrado/editar-magistrado.component';
import { ListaMagistradosComponent } from './lista-magistrados/lista-magistrados.component';
import { RegistroMagistradoComponent } from './registro-magistrado/registro-magistrado.component';
import { SubirBoletinComponent } from './subir-boletin/subir-boletin.component';
*/
const routes: Routes = [
  { path: 'adminCatalogos', component:CatGeneralComponent},
  /*
  { path: 'registrar', component:RegistroMagistradoComponent},
  { path: 'editar', component:EditarMagistradoComponent},
  { path: 'darBaja', component:BajaMagistradoComponent},
  { path: 'edicion-general', component:EdicionGeneralComponent},
  { path: 'subir-boletin', component:SubirBoletinComponent},
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
