import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {

  }

  username:string="";
  password:string="";

  usuarios: String[] = ["fernando","yasmin","johan","edgar","oswaldo","edy"];
  passwords: String[] = ["abc","123","123","123","123","123"];
  

  login(){

    let cambio = localStorage.getItem("nuevapassword");
    if(cambio != null){
      var split = cambio.split(":");
      for (let i in this.usuarios) {
        //console.log(this.usuarios[i]);
        if(split[0] == this.usuarios[i]){
          this.passwords[i] = split[1]
          localStorage.removeItem("nuevapassword");
          break
        }
        
      }

    }

    console.log(this.username)
    console.log(this.password)

    if(this.username == "admin" && this.password == "admin"){
      this.router.navigate(["/administracion"]);
    }else { 
      for (let i in this.usuarios) {
        //console.log(this.usuarios[i]);
        if(this.username == this.usuarios[i] && this.password == this.passwords[i]){
          this.router.navigate(["/magistrado"]); //Agregar ruta magistrado
          
          break
        }
        
      }
    }

  }

  

}