import { Component, OnInit } from '@angular/core';
import { Destino } from './destino';
import { DestinoService } from './destino.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-destino',
  templateUrl: './form-destino.component.html',
  styleUrls: ['./form-destino.component.css']
})
export class FormDestinoComponent implements OnInit{
  destino:Destino = new Destino()
  titulo:string="Registro de Estudiante";



  constructor(private destinoService:DestinoService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id= e['id_Destino'];
        if(id){
          this.destinoService.get(id).subscribe(
            es=>this.destino=es
          );
        }
      }
    );
  }

  create():void{
    console.log(this.destino);
    this.destinoService.create(this.destino).subscribe(
      res=>this.router.navigate(['/destino'])
    );
  }

  update():void{
    this.destinoService.update(this.destino).subscribe(
      res=>this.router.navigate(['/destino'])
    )
  }
}
