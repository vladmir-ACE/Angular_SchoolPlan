import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../../../../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private httpClient:HttpClient) { }


  getAllCours():Observable<Array<Cours>>{
    return this.httpClient.get<Array<Cours>>("http://localhost:8080/cours/liste");
  }
  postCours(data:Cours):Observable<Cours>{
    return this.httpClient.post<Cours>("http://localhost:8080/cours/save",data);
  }
  updateCours(data:Cours,):Observable<Cours>{
    return this.httpClient.put<Cours>("http://localhost:8080/cours/update",data);
  }

  deleteCours(id:number):Observable<Cours>{
    return this.httpClient.delete<Cours>("http://localhost:8080/cours/delete/"+id);
  }
}
