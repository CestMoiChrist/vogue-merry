import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  urliconbato: string = '../assets/icon/bateau.png';

  constructor(private router: Router) { }

  onGotoContact() {
    this.router.navigate(['/contact'])
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
