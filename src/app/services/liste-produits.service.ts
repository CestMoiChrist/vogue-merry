import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listeProduits } from '../models/listeProduit';


@Injectable({
  providedIn: 'root'
})
export class ListeProduitsService {

  constructor(private http: HttpClient) { }

  getListeProduits() {
    return this.http.get<listeProduits[]>('assets/data/listeProduits.json');
  }
}

