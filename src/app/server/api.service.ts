import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map}from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postUser(data:any){
    return this.http.post<any>('http://localhost:3000/UserInfo',data)
    .pipe(map((res:any)=>{
      return res;

    }))
  }
  getUser(){
    return this.http.get<any>('http://localhost:3000/UserInfo')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
