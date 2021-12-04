import { DetailsFacture } from "./DetailsFacture";

export class Invoice{
    idFacture!:number
    reference !:string;
    montantFacture !:number;
    montantRemise !:number;
    dateFacture !:string;
    active !:boolean;
    //detailsFacture !: DetailsFacture[];
    }
    