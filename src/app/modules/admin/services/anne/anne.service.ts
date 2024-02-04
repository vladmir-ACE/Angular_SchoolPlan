import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anne } from '../../../../models/anne';

@Injectable({
  providedIn: 'root'
})
export class AnneService {

  constructor(private httpClient:HttpClient) { }



  getAllAnne():Observable<Array<Anne>>{
    return this.httpClient.get<Array<Anne>>("http://localhost:8080/anne/liste");
  }
  postAnne(data:Anne):Observable<Anne>{
    return this.httpClient.post<Anne>("http://localhost:8080/anne/save",data);
  }
  updateAnne(data:Anne,):Observable<Anne>{
    return this.httpClient.put<Anne>("http://localhost:8080/anne/update",data);
  }

  deleteAnne(id:number):Observable<Anne>{
    return this.httpClient.delete<Anne>("http://localhost:8080/anne/delete/"+id);
  }
}
