import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }




  
  login(data:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8080/login",data);
  }
  register(data:User,id:number):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8080/register",data);
  }


}
