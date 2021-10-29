import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { iMagistrado } from 'src/app/interfaces/magistrado';
import { MagistradoService } from 'src/app/services/magistrado.service';

@Component({
  selector: 'app-lista-magistrados',
  templateUrl: './lista-magistrados.component.html',
  styleUrls: ['./lista-magistrados.component.css']
})
export class ListaMagistradosComponent implements OnInit {
  @Output() Data= new EventEmitter<iMagistrado>();
  magistrados: Array<iMagistrado>;


  constructor(private magistradoService: MagistradoService) {
    this.magistrados=magistradoService.getMagistrados();
  }

  ngOnInit(): void {

  }

  sendData(magistrado:iMagistrado){
    this.Data.emit(magistrado)
  }

}
