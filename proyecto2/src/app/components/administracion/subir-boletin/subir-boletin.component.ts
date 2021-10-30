import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subir-boletin',
  templateUrl: './subir-boletin.component.html',
  styleUrls: ['./subir-boletin.component.css']
})
export class SubirBoletinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subirArchivo(){
    Swal.fire({
      icon: 'success',
      title: 'Carga de archivo',
      text: 'Realizado con éxito!',
    })
  }
}

