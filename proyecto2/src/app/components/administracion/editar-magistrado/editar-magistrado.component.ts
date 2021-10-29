import { Component, OnInit } from '@angular/core';
import { iMagistrado } from 'src/app/interfaces/magistrado';
import { MagistradoService } from 'src/app/services/magistrado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-magistrado',
  templateUrl: './editar-magistrado.component.html',
  styleUrls: ['./editar-magistrado.component.css']
})
export class EditarMagistradoComponent implements OnInit {
  operacion="Editar"
  magistradoActual: iMagistrado={}
  constructor(private magistradoService:MagistradoService) { }

  ngOnInit(): void {
  }

  getMagistrado(e:any){
    this.magistradoActual=e
    console.log(this.magistradoActual);
  }

  editarMagistrado(e:any){
    this.magistradoService.editarMagistrado(e)
    Swal.fire({
      icon: 'success',
      title: 'Confirmado',
      text: 'Magistrado editado con éxito!',
    })
  }
}
