import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destino } from './destino';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  private url:string="http://localhost:8085/api/destino"

  constructor(private http:HttpClient) { }

  //obtener
  getAll():Observable<Destino[]>{
    return this.http.get<Destino[]>(this.url);
  }

  //crear
  create(destino:Destino):Observable<Destino>{
    return this.http.post<Destino>(this.url, destino);
  }

  //obtener
  get(Id_Destino:number):Observable<Destino>{
    return this.http.get<Destino>(this.url+'/'+Id_Destino);
  }

  update(destino:Destino):Observable<Destino>{
    return this.http.put<Destino>(this.url, destino);
  }

  delete(Id_Destino:number):Observable<Destino>{
    return this.http.delete<Destino>(this.url+'/'+Id_Destino);
  }
}
