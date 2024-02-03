import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from '../../../../models/enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private httpClient:HttpClient) { }



  getAllEnseignant():Observable<Array<Enseignant>>{
    return this.httpClient.get<Array<Enseignant>>("http://localhost:8080/enseignant/liste");
  }
  postEnseignant(data:Enseignant):Observable<Enseignant>{
    return this.httpClient.post<Enseignant>("http://localhost:8080/enseignant/save",data);
  }
  updateEnseignant(data:Enseignant,):Observable<Enseignant>{
    return this.httpClient.put<Enseignant>("http://localhost:8080/enseignant/update",data);
  }

  deleteEnseignant(id:number):Observable<Enseignant>{
    return this.httpClient.delete<Enseignant>("http://localhost:8080/enseignant/delete/"+id);
  }
}
