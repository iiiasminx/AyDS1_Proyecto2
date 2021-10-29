import { Component, OnInit } from '@angular/core';
import { iMagistrado } from 'src/app/interfaces/magistrado';
import { MagistradoService } from 'src/app/services/magistrado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-magistrado',
  templateUrl: './registro-magistrado.component.html',
  styleUrls: ['./registro-magistrado.component.css']
})
export class RegistroMagistradoComponent implements OnInit {

  operacion="Registrar"
  newMagistrado:iMagistrado={
    nombre:"",
    profesion:"",
    email:"",
    password:"",
    perfil:""
  }
  constructor(private magistradoService:MagistradoService) { }

  ngOnInit(): void {
  }

  registrarMagistrado(e: any){
    this.magistradoService.guardarMagistrado(e)
    Swal.fire({
      icon: 'success',
      title: 'Confirmado',
      text: 'Registro realizado con éxito!',
    })
  }
}
