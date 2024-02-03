export class Enseignant{
    id?: number;
    nom: string;
    prenom: string;
    tel: string;
    matricule: string;
    email: string;

    constructor(nom:string,prenom:string,tel:string,matricule: string,
        email: string,id?:number,){
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
        this.tel=tel;
        this.matricule=matricule;
        this.email=email;
    }
}