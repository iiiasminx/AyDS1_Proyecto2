import { Component, OnInit, HostBinding } from '@angular/core';

interface resolucion {
  expediente: string;
  materia: string;
  depto: string;
  municipio: string;
  magistrado: string;
}

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent implements OnInit {

  resoluciones2: resolucion[] = [
    { expediente: "001", materia: "Derecho penal", depto: "Guatemala", municipio: "Mixco", magistrado: "Diluc"},
    { expediente: "002", materia: "Derecho procesal", depto: "Petén", municipio: "Flores", magistrado: "Kaeya"},
    { expediente: "003", materia: "Derecho civil", depto: "San Marcos", municipio: "San Juan", magistrado: "Tartaglia"},
    { expediente: "004", materia: "Derecho de familia", depto: "Jutiapa", municipio: "Jutiapa", magistrado: "Klee"},
    { expediente: "005", materia: "Derecho civil", depto: "Guatemala", municipio: "Guatemala", magistrado: "Lisa"},
    { expediente: "004", materia: "Derecho laboral", depto: "Guatemala", municipio: "Mixco", magistrado: "Jean"},
    { expediente: "003", materia: "Derecho procesal", depto: "Petén", municipio: "Flores", magistrado: "Xiangling"},
    { expediente: "003", materia: "Derecho laboral", depto: "Escuintla", municipio: "San Juan", magistrado: "Razor"},
    { expediente: "002", materia: "Derecho de familia", depto: "Jutiapa", municipio: "Jutiapa", magistrado: "Kaeya"},
    { expediente: "005", materia: "Derecho civil", depto: "Guatemala", municipio: "Guatemala", magistrado: "Diluc"},
  ]; 

  resoluciones: resolucion[] = [
    { expediente: "001", materia: "Derecho penal", depto: "Guatemala", municipio: "Mixco", magistrado: "Diluc"},
    { expediente: "002", materia: "Derecho procesal", depto: "Petén", municipio: "Flores", magistrado: "Kaeya"},
    { expediente: "003", materia: "Derecho civil", depto: "San Marcos", municipio: "San Juan", magistrado: "Tartaglia"},
    { expediente: "004", materia: "Derecho de familia", depto: "Jutiapa", municipio: "Jutiapa", magistrado: "Klee"},
    { expediente: "005", materia: "Derecho civil", depto: "Guatemala", municipio: "Guatemala", magistrado: "Lisa"},
    { expediente: "004", materia: "Derecho laboral", depto: "Guatemala", municipio: "Mixco", magistrado: "Jean"},
    { expediente: "003", materia: "Derecho procesal", depto: "Petén", municipio: "Flores", magistrado: "Xiangling"},
    { expediente: "003", materia: "Derecho laboral", depto: "Escuintla", municipio: "San Juan", magistrado: "Razor"},
    { expediente: "002", materia: "Derecho de familia", depto: "Jutiapa", municipio: "Jutiapa", magistrado: "Kaeya"},
    { expediente: "005", materia: "Derecho civil", depto: "Guatemala", municipio: "Guatemala", magistrado: "Diluc"},
  ]; 

  mimagistrado: string = "";
  magistrados = [
    {name: "Diluc"}, {name: "Kaeya"},
    {name: "Tartaglia"}, {name: "Klee"},
    {name: "Lisa"}, {name: "Jean"},
    {name: "Xiangling"}, {name: "Razor"},
    {name: "Todos"}
  ]

  @HostBinding('class') class = 'row';
  constructor() { }

  ngOnInit(): void {
  }

  probando(): any{

    var holi1: resolucion[] = [];

    this.resoluciones = this.resoluciones2;

    //magistrados
    if (this.mimagistrado == '' || this.mimagistrado == 'Todos') {
      holi1 = this.resoluciones
    } else {
      this.resoluciones.forEach(element => {
        if (element.magistrado == this.mimagistrado) {
          holi1.push(element)
        }
      });
    }

    this.resoluciones = holi1;
  }

}
