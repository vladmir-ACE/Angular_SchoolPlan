export  class Anne {
    id?: number;
    code: string;
    date_debut: string;
    date_fin: string;
    

    constructor(code:string,date_debut:string,date_fin:string,
        id?:number,){
        this.id=id;
        this.code=code;
        this.date_debut=date_debut;
        this.date_fin=date_fin;
        
    }
}