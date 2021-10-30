import { Injectable } from '@angular/core';
import { iDepartamento } from '../interfaces/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private departamentos: Array<iDepartamento>;
  private id=6;
  constructor() {
    this.departamentos=[
    {"id":1,"nombre":"Gabey Pellington","habitantes":123,"extension":12345.6},
    {"id":2,"nombre":"Sax Blowfelde","habitantes":456,"extension":12345.6},
    {"id":3,"nombre":"Brande Dwane","habitantes":789,"extension":12345.6},
    {"id":4,"nombre":"Louisa Melwall","habitantes":10111213,"extension":12345.6},
    {"id":5,"nombre":"Emanuele Milmo","habitantes":141516,"extension":12345.6},
    ]
  }

  getDepartamentos(){
    return this.departamentos;
  }
  newId(){
    return this.id++;
  }

  guardarMagistrado(nuevoMagistrado: iDepartamento){
    nuevoMagistrado.id=this.newId();
    this.departamentos.push(nuevoMagistrado);
  }

  editarMagistrado(newData:iDepartamento){
    this.departamentos.forEach(departamento => {
      if(departamento.id==newData.id){
        departamento.nombre=newData.nombre;
        departamento.habitantes=newData.habitantes;
        departamento.extension=newData.extension;
      }
    });
  }

  eliminarMagistrado(id:number){
    this.departamentos=this.departamentos.filter(departamento => departamento.id!=id)
  }

}