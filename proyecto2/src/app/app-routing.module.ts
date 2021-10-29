import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTANDO COSAS QUE NECESITO
// import { } from './components';

import { InicioComponent } from './components/inicio/inicio.component';
import { PgeneralComponent } from './components/pgeneral/pgeneral.component';
import { CasosComponent } from './components/casos/casos.component';
import { InnovacionesComponent } from './components/innovaciones/innovaciones.component';
import { ResolucionesComponent } from './components/resoluciones/resoluciones.component';
import { InfoComponent } from './components/info/info.component';
import { AdminLayoutComponent } from './components/administracion/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
    // esto solo es en el default
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'biblioteca',
    component: PgeneralComponent
  },
  {
    path: 'biblioteca/Resoluciones',
    component: ResolucionesComponent
  },
  {
    path: 'biblioteca/Innovaciones',
    component: InnovacionesComponent
  },
  {
    path: 'biblioteca/Casos',
    component: CasosComponent
  },
  {
    path: 'informacion',
    component: InfoComponent
  },

  /***********************Administracion     */
  {
    path: "administracion",
    component: AdminLayoutComponent,
    loadChildren: () =>
      import("./components/administracion/administracion.module").then((m) => m.AdministracionModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
