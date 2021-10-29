import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iMagistrado } from 'src/app/interfaces/magistrado';

@Component({
  selector: 'app-form-magistrado',
  templateUrl: './form-magistrado.component.html',
  styleUrls: ['./form-magistrado.component.css']
})
export class FormMagistradoComponent implements OnInit {
  @Input() user:any;
  @Input() operacion:string | any;
  @Output() newData= new EventEmitter<iMagistrado>();
  @Output() submit= new EventEmitter<null>();


  constructor() {

  }

  ngOnInit(): void {

  }

  addNewData() {
    this.newData.emit(this.user);
  }

  sendSubmit(){
    this.submit.emit()
  }
}
