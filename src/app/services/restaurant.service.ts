import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  getAllRestaurant(){
    return this.http.get<Restaurant[]>('assets/data/restaurants.json'); 
  }
}
