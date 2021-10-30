import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iDepartamento } from 'src/app/interfaces/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-departamento',
  templateUrl: './form-departamento.component.html',
  styleUrls: ['./form-departamento.component.css']
})
export class FormDepartamentoComponent implements OnInit {
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
