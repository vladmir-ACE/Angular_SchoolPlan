import { Injectable } from '@angular/core';
import { Auteur } from '../models/auteur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  constructor(private httpClient:HttpClient)
   { 


   }


//OLD
  // getAllAuteur(){

  //   let auteurs: Array<Auteur>=[] ;

  //   auteurs.push(
  //     new Auteur(1,"Baudry", "Fabrice",19),
  //     new Auteur(2,"koffi", "kodjo",20),
  //     new Auteur(3,"Abla", "Toma",49),
  //     new Auteur(5,"Lola", "karine",39),

  //   )
  //   return auteurs;

  // }



  getAllAuteur():Observable<Array<Auteur>>{
    return this.httpClient.get<Array<Auteur>>("http://localhost:8080/auteurs");
  }
  postAuteur(data:Auteur):Observable<Auteur>{
    return this.httpClient.post<Auteur>("http://localhost:8080/auteurs",data);
  }
  updateAuteur(data:Auteur,id:number):Observable<Auteur>{
    return this.httpClient.put<Auteur>("http://localhost:8080/auteurs/"+id,data);
  }

  deleteAuteur(id:number):Observable<Auteur>{
    return this.httpClient.delete<Auteur>("http://localhost:8080/auteurs/"+id);
  }



}
