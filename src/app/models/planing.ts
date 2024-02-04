import { Cours } from "./cours";
import { Classe } from "./classe";

export class Planing{

    id?: number;
    heure_debut: string;
    heure_fin: string;
    cours: Cours; 
    classe:Classe

    constructor(heure_debut: string,
        heure_fin: string,
        cours: Cours,
        classe:Classe ,id?:number,){
        this.id=id;
        this.heure_debut=heure_debut;
        this.heure_fin=heure_fin;
        this.cours = cours;
        this.classe = classe;
        
    }

}