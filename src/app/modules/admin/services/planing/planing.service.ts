import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Planing } from '../../../../models/planing';

@Injectable({
  providedIn: 'root'
})
export class PlaningService {
  constructor(private httpClient:HttpClient) { }


  getAllPlaning():Observable<Array<Planing>>{
    return this.httpClient.get<Array<Planing>>("http://localhost:8080/planing/liste");
  }
  postPlaning(data:Planing):Observable<Planing>{
    return this.httpClient.post<Planing>("http://localhost:8080/planing/save",data);
  }
  updatePlaning(data:Planing,):Observable<Planing>{
    return this.httpClient.put<Planing>("http://localhost:8080/planing/update",data);
  }

  deletePlaning(id:number):Observable<Planing>{
    return this.httpClient.delete<Planing>("http://localhost:8080/planing/delete/"+id);
  }
}
