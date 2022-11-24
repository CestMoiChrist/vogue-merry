import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategorieProduit } from '../models/categorieProduit';

@Injectable({
  providedIn: 'root'
})
export class CategorieProduitService {

  constructor(private http: HttpClient) { }

  getProduitCategorie() {
    return this.http.get<CategorieProduit[]>('assets/data/categorieProduits.json');
  }
}
