export class Auteur {
    id?: number;
    nom: string;
    prenom: string;
    age: number;

    constructor(nom:string,prenom:string,age:number,id?:number,){
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
    }

    
}

