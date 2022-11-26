import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  urliconbato: string = '../assets/icon/bateau.png';

  constructor(private router: Router) {}

  onLoadProduit(produit: {
    name: string;
    description: string[];
    isOn: boolean;
  }) {
    let navigationExtras: NavigationExtras = {
      state: {
        produit: produit,
      },
    };
    this.router.navigate(['produit'], navigationExtras);
  }

  onLoadRestaurant(restaurant: {
    name: string;
    description: string[];
    isOn: boolean;
  }) {
    let navigationExtras: NavigationExtras = {
      state: {
        restaurant: restaurant,
      },
    };
    this.router.navigate(['restaurant'], navigationExtras);
  }

  onLoadRecette(recette: {
    name: string;
    description: string[];
    isOn: boolean;
  }) {
    let navigationExtras: NavigationExtras = {
      state: {
        recette: recette,
      },
    };
    this.router.navigate(['recette'], navigationExtras);
  }

  onGotoContact() {
    this.router.navigate(['/contact']);
  }

  onGotoListeProduits() {
    this.router.navigate(['/liste-produits']);
  }

  onGotoCategorieProduits() {
    this.router.navigate(['/categorie-produit']);
  }

  onGoToBateaux() {
    this.router.navigate(['/bateaux']);
  }

  onGoToRestaurants() {
    this.router.navigate(['/restaurants']);
  }

  onGotoRecette() {
    this.router.navigate(['/list-recette']);
  }
}
