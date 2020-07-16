import { Principal } from './../interfaces/vistaprincipal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private _url: string= "https://dog.ceo/api/breeds/list/all"
  data: Object;

  constructor(private http: HttpClient) { }
  //  save (principal : Principal){
  //    const headers = new HttpHeaders( headers: {'Content-Type': 'application/json'});
  //    return this.http.post();
  //  }
  getPrincipal(){
    return new Promise(resolve => {
      this.http.get(this._url).subscribe(data => {
        this.data = data;
        resolve(this.data);
        console.log('success');
      }, err => {
        console.log(err);
      });

//       this.http.get(this._url).map(res => res.json().data).subscribe(data => {
//   this.data = data;
//   resolve(this.data);
//   console.log('success');
// });
    });
  }

  // notasEstudiante(usuario: string, password: string) {
  //   usuario = '44157395';
  //   return new Promise(resolve => {
  //     this.http.get(this._url).subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });

  // }
}
