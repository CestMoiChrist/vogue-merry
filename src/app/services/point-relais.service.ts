import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PointRelais } from '../models/pointRelais';

@Injectable({
  providedIn: 'root'
})
export class PointRelaisService {

  constructor(private http : HttpClient) { }

  getPointRelais(){
    return this.http.get<PointRelais[]>('assets/data/pointRelais.json');
  }
}
