import { Component, OnInit } from '@angular/core';
import { iMagistrado } from 'src/app/interfaces/magistrado';
import { MagistradoService } from 'src/app/services/magistrado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-baja-magistrado',
  templateUrl: './baja-magistrado.component.html',
  styleUrls: ['./baja-magistrado.component.css']
})
export class BajaMagistradoComponent implements OnInit {

  magistradoActual:iMagistrado={}
  constructor(private magistradoService:MagistradoService) { }

  ngOnInit(): void {
  }

  getMagistrado(e:any){
    this.magistradoActual=e
    console.log(this.magistradoActual);
  }

  eliminarMagistrado(){
    this.magistradoService.eliminarMagistrado(this.magistradoActual.id || 0)
    Swal.fire({
      icon: 'success',
      title: 'Confirmado',
      text: 'Operación realizada con éxito!',
    })
  }
}
