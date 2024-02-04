import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from '../../../../models/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private httpClient:HttpClient) { }



  getAllClasse():Observable<Array<Classe>>{
    return this.httpClient.get<Array<Classe>>("http://localhost:8080/classe/liste");
  }
  postClasse(data:Classe):Observable<Classe>{
    return this.httpClient.post<Classe>("http://localhost:8080/classe/save",data);
  }
  updateClasse(data:Classe,):Observable<Classe>{
    return this.httpClient.put<Classe>("http://localhost:8080/classe/update",data);
  }

  deleteClasse(id:number):Observable<Classe>{
    return this.httpClient.delete<Classe>("http://localhost:8080/classe/delete/"+id);
  }
}
