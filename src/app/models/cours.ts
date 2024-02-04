import { Anne } from "./anne";
import { Enseignant } from "./enseignant";
import { Matiere } from "./matiere";

export  class  Cours{

    id?: number;
    intitule: string;
    matiere: Matiere;
    enseignant: Enseignant;
    anne: Anne;    

    constructor(intitule:string,matiere: Matiere,
        enseignant: Enseignant, anne: Anne,id?:number,){
        this.id=id;
        this.intitule=intitule;
        this.matiere=matiere;
        this.enseignant = enseignant;
        this.anne = anne;
        
    }


}