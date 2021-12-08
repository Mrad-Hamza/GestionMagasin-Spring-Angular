import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesRayon } from '../Model/ImagesRayon';
import { Rayon } from '../Model/Rayon';

@Injectable({
  providedIn: 'root'
})
export class RayonService {



  constructor(private http:HttpClient) { }

  getAll():Observable<Rayon[]> {
    return this.http.get<Rayon[]>("http://localhost:8080/SpringMVC/servlet/retrieve-all-rayons-true");
  }
  getRayonById(id:number):Observable<Rayon> {
    return this.http.get<Rayon>("http://localhost:8080/SpringMVC/servlet/get-rayon/"+id)
  }
  updateRayon(data:any,id:number) {
    return this.http.put<Rayon>("http://localhost:8080/SpringMVC/servlet/update-rayon/"+id,data);
  }
  addRayon(data:any):Observable<Rayon> {
    return this.http.post<Rayon>("http://localhost:8080/SpringMVC/servlet/add-rayon/",data);
  }
  deleteRayon(id:number,data:any){
    return this.http.put<Rayon>("http://localhost:8080/SpringMVC/servlet/delete-by-state-rayon/"+id,data);
  }
  getAllImages(id:number):Observable<ImagesRayon[]> {
    return this.http.get<ImagesRayon[]>("http://localhost:8080/SpringMVC/servlet/get-image-by-rayon/"+id);
  }
  search(search:String):Observable<Rayon[]> {
    return this.http.get<Rayon[]>("http://localhost:8080/SpringMVC/servlet/recherche-rayon/"+search)
  }
  sortASC():Observable<Rayon[]> {
    return this.http.get<Rayon[]>("http://localhost:8080/SpringMVC/servlet/rayon-sortASC");
  }
  sortDESC():Observable<Rayon[]> {
    return this.http.get<Rayon[]>("http://localhost:8080/SpringMVC/servlet/rayon-sortDESC");
  }
  sortByProducts():Observable<Rayon[]> {
    return this.http.get<Rayon[]>("http://localhost:8080/SpringMVC/servlet/sortByProductNumbers");
  }
  filterByPrice(min:number,max:number):Observable<Rayon[]> {
    return this.http.get<Rayon[]>("http://localhost:8080/SpringMVC/servlet/filterByPrice/"+min+"/"+max);
  }
}
