import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { CategorieProduit } from '../models/categorieProduit';
import { CategorieProduitService } from '../services/categorie-produit.service';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.page.html',
  styleUrls: ['./categorie-produit.page.scss'],
})
export class CategorieProduitPage implements OnInit {

  categorieProduits: CategorieProduit[] = [];
  produitsPoisson: CategorieProduit[] = [];
  produitsCoquillage: CategorieProduit[] = [];
  produitsCrustace: CategorieProduit[] = [];
  produitsPromotion: CategorieProduit[] = [];


  constructor(private router: Router,
    private categorieProduitService: CategorieProduitService) { }

  ngOnInit() {

    this.categorieProduitService.getProduitCategorie().subscribe(reponse => {
      this.produitsPoisson = reponse;
    })

    this.categorieProduitService.getAllPoisson().subscribe(reponse => {
      this.produitsPoisson = reponse;
    })

    this.categorieProduitService.getAllCoquillage().subscribe(reponse => {
      this.produitsCoquillage = reponse;
    })

    this.categorieProduitService.getAllCrustace().subscribe(reponse => {
      this.produitsCrustace = reponse;
    })

    this.categorieProduitService.getAllPromotion().subscribe(reponse => {
      this.produitsPromotion = reponse;
    })
  }


  onLoadPoissons(CategorieProduit: {
    id: string;
    name: string;
    category: number;
    price: number;
    unit: number;
    availability: boolean;
    sale: boolean;
    discount: number;
    comments: string;
    owner: string;
  }) {
    let navigationExtras: NavigationExtras = {
      state: {
        poissons: produitsPoisson
      }
    };
    this.router.navigate(['liste-produits'], navigationExtras);
  }

  onLoadCrustaces(recette: { name: string; description: string[], isOn: boolean }) {
    let navigationExtras: NavigationExtras = {
      state: {
        recette: recette
      }
    };
    this.router.navigate(['recette'], navigationExtras);
  }

  onLoadCoquillages(recette: { name: string; description: string[], isOn: boolean }) {
    let navigationExtras: NavigationExtras = {
      state: {
        recette: recette
      }
    };
    this.router.navigate(['recette'], navigationExtras);
  }

  onLoadPromotions(recette: { name: string; description: string[], isOn: boolean }) {
    let navigationExtras: NavigationExtras = {
      state: {
        recette: recette
      }
    };
    this.router.navigate(['recette'], navigationExtras);
  }


}
