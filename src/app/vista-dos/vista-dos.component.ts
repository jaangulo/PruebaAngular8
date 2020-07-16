import { Principal } from './../interfaces/vistaprincipal';
import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vista-dos',
  templateUrl: './vista-dos.component.html',
  styleUrls: ['./vista-dos.component.css']
})
export class VISTADOSComponent implements OnInit {
  mensaje: string;
  @Input() datosdepaguinados:string="no hay datos";
  @Output()  propagar = new EventEmitter<string>();
  principal: Principal = {
    name: null,
    year: null,
    raza: null
  };
  estado:boolean = false;
  emitEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
   
  }
  saveIngresar(){
    console.log(this.principal);
    this.propagar.emit('Este dato viajará hacia el padre');
  }
  onPropagar() {
    this.propagar.emit(this.mensaje);
  }


}
