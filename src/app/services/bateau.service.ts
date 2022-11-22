import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bateau } from '../models/bateau';

@Injectable({
  providedIn: 'root'
})
export class BateauService {

  constructor(private http: HttpClient) { }

  getAllBateau(){
    return this.http.get<Bateau[]>('assets/data/bateaux.json'); 
  }
}
