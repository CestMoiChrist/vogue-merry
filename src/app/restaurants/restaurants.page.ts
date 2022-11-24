import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurantsList!: Restaurant[];


  constructor(private router:Router, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurant().subscribe(res => {
        this.restaurantsList = res;
      },
      err => {
        console.log("error")
      }
    );
  }

  onLoadRestaurant(restaurant: {nom: string, adresse: string, horaire: string[], image: string, site_web: string}) {
      let navigationExtras : NavigationExtras = {
        state : {
          restaurant:restaurant
      }
    };
    this.router.navigate(['/single-restaurant'], navigationExtras);
  }
}