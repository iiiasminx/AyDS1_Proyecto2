import { Injectable } from '@angular/core';
import { iMagistrado } from '../interfaces/magistrado';

@Injectable({
  providedIn: 'root'
})
export class MagistradoService {
  private magistrados: Array<iMagistrado>;
  private id=6;
  constructor() {
    this.magistrados=[
    {"id":1,"nombre":"Gabey Pellington","profesion":"Help Desk Operator","email":"gpellington0@unc.edu","password":"2UsKgr","perfil":"Prasetiya Mulya Business School"},
    {"id":2,"nombre":"Sax Blowfelde","profesion":"Director of Sales","email":"sblowfelde1@fda.gov","password":"GFLiD94gsL4","perfil":"Baylor College of Medicine"},
    {"id":3,"nombre":"Brande Dwane","profesion":"Financial Analyst","email":"bdwane2@sourceforge.net","password":"qLIcx8rYO","perfil":"University of Tennessee - Chattanooga"},
    {"id":4,"nombre":"Louisa Melwall","profesion":"Systems Administrator I","email":"lmelwall3@statcounter.com","password":"3UNC1OwyeAR","perfil":"Olivet College"},
    {"id":5,"nombre":"Emanuele Milmo","profesion":"Editor","email":"emilmo4@deliciousdays.com","password":"xMz1ZnlG9X","perfil":"Yukon College"},
    ]
  }

  getMagistrados(){
    return this.magistrados;
  }
  newId(){
    return this.id++;
  }

  guardarMagistrado(nuevoMagistrado: iMagistrado){
    nuevoMagistrado.id=this.newId();
    this.magistrados.push(nuevoMagistrado);
  }

  editarMagistrado(newData:iMagistrado){
    this.magistrados.forEach(magistrado => {
      if(magistrado.id==newData.id){
        magistrado.nombre=newData.nombre;
        magistrado.profesion=newData.profesion;
        magistrado.email=newData.email;
        magistrado.password=newData.password;
      }
    });
  }

  eliminarMagistrado(id:number){
    this.magistrados=this.magistrados.filter(magistrado => magistrado.id!=id)
  }





}
