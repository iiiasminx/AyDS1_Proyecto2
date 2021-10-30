import { Component, OnInit, HostBinding } from '@angular/core';

interface resolucion {
  expediente: string;
  materia: string;
  depto: string;
  municipio: string;
  magistrado: string;
}

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {

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

  midepto: string = "";
  deptos = [
    {name: "Guatemala"},{name: "Petén"},
    {name: "San Marcos"},{name: "Jutiapa"},
    {name: "Escuintla"},{name: "El Progreso"},
    {name: "Huehuetenango"},{name: "Quetzaltenango"},
    {name: "Chimaltenango"},{name: "Suchitepéquez"},
    {name: "Sacatepéquez"},{name: "Alta Verapaz"},
    {name: "Baja Verapaz"},{name: "Izabal"},
    {name: "Jalapa"},{name: "Santa Rosa"},
    {name: "Todos"}
  ]

  miexp: string = "";
  expedientes = [
    {name: "001"},{name: "002"},
    {name: "003"},{name: "004"},
    {name: "005"},{name: "006"},
    {name: "Todos"}
  ];

  mimateria: string = "";
  materias = [
    {name: "Derecho penal"},{name: "Derecho procesal"},
    {name: "Derecho civil"},{name: "Derecho de familia"},
    {name: "Derecho laboral"},{name: "Derecho mercantil"},
    {name: "Todos"}
  ];
  

  @HostBinding('class') class = 'row';

  constructor() { }

  ngOnInit(): void {
  }

  probando(): any{

    var holi1: resolucion[] = [];
    var holi2: resolucion[] = [];
    var holi3: resolucion[] = [];
    var holi4: resolucion[] = [];

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

    //deptos
    if (this.midepto == '' || this.midepto == 'Todos') {
      holi2 = holi1;
    } else {
      holi1.forEach(element => {
        if (element.depto == this.midepto) {
          holi2.push(element)
        }
      });
    }

    //expedientes
    if (this.miexp == '' || this.miexp == 'Todos') {
      // no pasa nada
      holi3 = holi2;
    } else {
      holi2.forEach(element => {
        if (element.expediente == this.miexp) {
          holi3.push(element)
        }
      });
    }


    //materias
    if (this.mimateria == '' || this.mimateria == 'Todos') {
      // no pasa nada
      holi4 = holi3;
    } else {
      holi3.forEach(element => {
        if (element.materia == this.mimateria) {
          holi4.push(element)
        }
      });
    }

    this.resoluciones = holi4;
  }

}
