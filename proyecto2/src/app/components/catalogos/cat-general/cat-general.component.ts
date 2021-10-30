import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { iDepartamento } from 'src/app/interfaces/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-cat-general',
  templateUrl: './cat-general.component.html',
  styleUrls: ['./cat-general.component.css']
})
export class CatGeneralComponent implements OnInit {
  @Input() user:any;
  @Input() operacion:string | any;
  @Output() newData= new EventEmitter<iDepartamento>();
  @Output() submit= new EventEmitter<null>();
  @Output() Data= new EventEmitter<iDepartamento>();

  newDepartamento:iDepartamento={
    nombre:"",
    habitantes:0,
    extension:0
  }
  constructor(private departamentoService:DepartamentoService) { }
  
  ngOnInit(): void {
  }

  addNewData() {
    this.newData.emit(this.user);
  }

  sendSubmit(){
    this.submit.emit()
  }

  sendData(departamento:iDepartamento){
    this.Data.emit(departamento)
  }

  registrarDepartamento(e: any){
    this.departamentoService.guardarMagistrado(e)
    Swal.fire({
      icon: 'success',
      title: 'Confirmado',
      text: 'Registro realizado con éxito!',
    })
  }

}
