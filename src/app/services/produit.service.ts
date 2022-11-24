import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  getAllProduit(){
    return this.http.get<Produit[]>('assets/data/produits.json'); 
  }

  getAllPoisson(){
    return this.http.get<Produit[]>('assets/data/poissons.json'); 
  }

  getAllCoquillage(){
    return this.http.get<Produit[]>('assets/data/coquillages.json'); 
  }

  getAllCrustace(){
    return this.http.get<Produit[]>('assets/data/crustaces.json'); 
  }

  getAllPromotion(){
    return this.http.get<Produit[]>('assets/data/promotions.json'); 
  }
}
