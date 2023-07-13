import { Component, OnInit } from '@angular/core';
import { Itinerario } from './itinerario';
import { ItinerarioService } from './itinerario.service';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.css']
})
export class ItinerarioComponent implements OnInit{
  titulo:string="Lista de Itinerarios";

  itinerario!:Itinerario[];

  constructor(private itinerarioService:ItinerarioService){}

  ngOnInit(): void{
    this.itinerarioService.getAll().subscribe(
      i =>this.itinerario=i
    );
  }
}
