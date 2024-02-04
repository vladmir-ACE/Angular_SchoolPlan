export class Classe {
    id?: number;
    intitule: string;
    code: string;
    

    constructor(intitule:string,code:string,id?:number,){
        this.id=id;
        this.intitule=intitule;
        this.code=code;
        
    }
}