import { Time } from "@angular/common";

export class Itinerario {
    id_Itinerario!:number;
    dia_Vuelo!:Date;
    hora_Despegue!:Time;
    hora_Llegada!:Time;
    servicio!:Boolean;
    dia_Retorno!:Date;
    estado!:number;
}
