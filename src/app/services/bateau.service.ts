import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bateau } from '../models/bateau';

@Injectable({
  providedIn: 'root',
})
export class BateauService {
  bateauxList!: Bateau[];

  constructor(private http: HttpClient) {}

  getAllBateaux() {
    return this.http.get<Bateau[]>('assets/data/bateaux.json');
  }
}
