import { Component, OnInit } from '@angular/core';
import { Destino } from './destino';
import { DestinoService } from './destino.service';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit{
  titulo:String="Lista de Destinos"

  destino!:Destino[];

  constructor(private destinoService:DestinoService){}

  ngOnInit(): void {
    this.destinoService.getAll().subscribe(
      d =>this.destino=d
    );
  }

  delete(destino:Destino):void{
    console.log("BORRANDO");
    this.destinoService.delete(destino.id_Destino).subscribe(
      res=>this.destinoService.getAll().subscribe(
        response=>this.destino=response
      )
    );
  }
}
