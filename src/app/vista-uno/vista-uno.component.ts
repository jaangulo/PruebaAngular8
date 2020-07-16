import { Principal } from './../interfaces/vistaprincipal';
import { PrincipalService } from './../services/principal.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-vista-uno',
  templateUrl: './vista-uno.component.html',
  styleUrls: ['./vista-uno.component.css']
})
export class VISTAUNOComponent implements OnInit {
  items: any;
  //public Principal = [];
  constructor(private _principalservicio : PrincipalService){}
  vistaprincipal: any;
  view = 'notass';

  ngOnInit(){
    this._principalservicio.getPrincipal().then(data => {
          this.vistaprincipal =Object.values(data['message']);
          //this.vistaprincipal = Object.values(data['message']);
        //  console.log(Object.values(data['message']))
          this.items=Object.keys(data['message']);
        // console.log(Object.keys(data['message']));
        });
       
  }

 
}
