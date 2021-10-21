import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { editorial } from '../models/editorial';
import { Response } from '../models/response'

const httpOptions ={
  headers: new HttpHeaders({
    'Contend-Type':'applicacion/json'
  })

}


@Injectable({ 
  providedIn: 'root'
})
export class ApiEditorialService {

  url: string='https://localhost:44355/api/editorial/';
  ///INYECTAR
  constructor(
    private http: HttpClient
  ) { }

  /////GET
  geteditorial(): Observable<Response>{
    return this.http.get<Response>(this.url);
  }  
  
  /////POST
  add(EDITORIAL:editorial) : Observable<Response>{
    return this.http.post<Response>(this.url,EDITORIAL,httpOptions);
  }

}
