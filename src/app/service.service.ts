import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  addPost(data:any){
    return this.http.post('http://localhost:3000/post',data)
  }

  postList(){
    return this.http.get<any>('http://localhost:3000/post');
  }

  getpost(id:string){
    return this.http.get<any>(`http://localhost:3000/post/${id}`);
    
  }
}
