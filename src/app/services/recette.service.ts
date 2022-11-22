import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recette } from '../models/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private http: HttpClient) { }

  getAllRecette(){
    return this.http.get<Recette[]>('assets/data/recettes.json'); 
  }
}
