import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fournisseur } from '../../model/Fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http:HttpClient) { }
  baseurl=environment.url2;
  baseurl_AngularSpring=environment.url2;
   
  fetchFournisseurs():Observable<Fournisseur[]>
  {
    return this.http.get<Fournisseur[]>(this.baseurl+"/retrive-all-forr");
  }

  fetchFournisseursById(id:number):Observable<Fournisseur>
  {
   // return this.http.get<Fournisseur>(this.baseurl_AngularSpring+"get-Fournisseur/"+id);
   return this.http.get<Fournisseur>(this.baseurl+"/retrive-forr/"+id);
  }
 
  addFournisseur(data:Fournisseur)
  {
  
    //data.detailsFournisseur=[];
    return this.http.post(this.baseurl_AngularSpring+"/add-forr",data);
    //return this.http.post(this.baseurl+"/add-forr/",data);
  }
 
  
  deleteFournisseur(id:number){
    //return this.http.delete(this.baseurl_AngularSpring+"delete-Fournisseur/"+id);
    return this.http.delete(this.baseurl+"/remove-fournisseur/"+id);

  }
  UpdatFournisseur(data:Fournisseur):Observable<Fournisseur>
  {
    //return this.http.put<Fournisseur>(this.baseurl_AngularSpring+"modify-Fournisseur/",data);
    console.log("put")
    console.log(data)
    return this.http.put<Fournisseur>(this.baseurl+"/update-fournisseur/"+data.idFournisseur,data);

  }
  getNbOrdersByCountry():Observable<Object[]>
   {
    return this.http
    .get<Object[]>("http://localhost:8090/SpringMVC/servlet/retrive-fn2/") 
   }


}
