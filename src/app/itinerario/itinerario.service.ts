import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itinerario } from './itinerario';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {

  private url:string="http://localhost:8085/api/itinerario";

  constructor(private http:HttpClient) { }

  getAll():Observable<Itinerario[]>{
    return this.http.get<Itinerario[]>(this.url);
  }

  //crear itinerario
  create(itinerario:Itinerario):Observable<Itinerario>{
    return this.http.post<Itinerario>(this.url, itinerario);
  }

  //obtener itinerario
  get(Id_Itinerario:number):Observable<Itinerario>{
    return this.http.get<Itinerario>(this.url+'/'+Id_Itinerario);
  }

  //actualizar itinerario
  update(itinerario:Itinerario):Observable<Itinerario>{
    return this.http.put<Itinerario>(this.url, itinerario);
  }

  //eliminar itinerario
  delete(Id_Itinerario:number):Observable<Itinerario>{
    return this.http.delete<Itinerario>(this.url+'/'+Id_Itinerario);
  }
}
