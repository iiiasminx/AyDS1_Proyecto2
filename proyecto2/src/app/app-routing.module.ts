import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTANDO COSAS QUE NECESITO
// import { } from './components';

import { InicioComponent } from './components/inicio/inicio.component';
import { PgeneralComponent } from './components/pgeneral/pgeneral.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
