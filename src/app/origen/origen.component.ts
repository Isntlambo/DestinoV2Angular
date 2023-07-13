import { Component, OnInit } from '@angular/core';
import { OrigenService } from './origen.service';
import {Origen} from './origen';

@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.css']
})
export class OrigenComponent implements OnInit {
  titulo:string="Lista de Origen";
  prueba:string="Esto es una prueba del componente Origen";
  
  origen!:Origen[];
  constructor(private origenService:OrigenService) { }

    ngOnInit():void{
      this.origenService.getAll().subscribe(
        e =>this.origen=e
      );
      
    }
    delete(origen:Origen):void {
      console.log ("BORRANDO");
      this.origenService.delete(origen.id_Origen).subscribe(
        res=>this.origenService.getAll().subscribe(
          response=>this.origen=response
        )
      );
    }
}
