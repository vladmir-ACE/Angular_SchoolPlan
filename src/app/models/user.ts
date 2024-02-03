export class User{

    id?:number;
    username:string;
    password:string;
    roles?:string;

    constructor(username:string,password:string,roles?:string,id?:number,){
        this.id=id;
        this.password=password;
        this.username=username;
        this.roles=roles
    }


}