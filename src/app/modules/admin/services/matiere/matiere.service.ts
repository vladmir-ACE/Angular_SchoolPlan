import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from '../../../../models/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private httpClient:HttpClient) { }



  getAllMatiere():Observable<Array<Matiere>>{
    return this.httpClient.get<Array<Matiere>>("http://localhost:8080/matiere/liste");
  }
  postMatiere(data:Matiere):Observable<Matiere>{
    return this.httpClient.post<Matiere>("http://localhost:8080/matiere/save",data);
  }
  updateMatiere(data:Matiere,):Observable<Matiere>{
    return this.httpClient.put<Matiere>("http://localhost:8080/matiere/update",data);
  }

  deleteMatiere(id:number):Observable<Matiere>{
    return this.httpClient.delete<Matiere>("http://localhost:8080/matiere/delete/"+id);
  }
}
