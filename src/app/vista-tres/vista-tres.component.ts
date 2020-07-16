import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {VISTADOSComponent} from './../vista-dos/vista-dos.component';

@Component({
  selector: 'app-vista-tres',
  templateUrl: './vista-tres.component.html',
  styleUrls: ['./vista-tres.component.css']
})
export class VISTATRESComponent implements OnInit {
@Input() datosdepaguinados:string="no hay datos";
@ViewChild('child1') childOne:VISTADOSComponent;
  constructor() { }

  ngOnInit(): void {
     
  }
  
}
