
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  [x: string]: any;
  private host ='http://localhost:3000/produits';
  constructor(private httpClient: HttpClient) {}
 
public getAll() {
  return this.httpClient.get<Produit[]>(this.host+'/getall');
}

public deleteProduct(id:number)
{
  return this.httpClient.delete(this.host+"/delete/"+id);
}

public addProduct(objet:Produit):Observable<Produit>
{
  return this.httpClient.post<Produit>(this.host+"/add",objet);
}

public updateProduct(objet:Produit)
{
  return this.httpClient.put<Produit>(this.host+"/update",objet);
}

getProductByName(nom: string){
  return this.httpClient.get<Produit[]>(this.host+"/getbyName/"+nom);   }


getone(id: number){
  return this.httpClient.get(this.host+"/getone/"+id);   }


}



