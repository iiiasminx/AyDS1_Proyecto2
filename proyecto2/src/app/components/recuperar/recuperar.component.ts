import { Component, OnInit } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username:string="";
  password:string="";

  recuperar(){

    localStorage.setItem("nuevapassword",this.username + ":" + this.password);

    //console.log(this.inicio.usuarios)
  }

}
