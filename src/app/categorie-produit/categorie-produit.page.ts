import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { CategorieProduit } from '../models/categorieProduit';
import { CategorieProduitService } from '../services/categorie-produit.service';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.page.html',
  styleUrls: ['./categorie-produit.page.scss'],
})
export class CategorieProduitPage implements OnInit {

  categorieProduits: CategorieProduit[] = [];
  produitsPoisson: Produit[] = [];
  produitsCoquillage: Produit[] = [];
  produitsCrustace: Produit[] = [];
  produitsPromotion: Produit[] = [];


  constructor(private router: Router,
    private categorieProduitService: CategorieProduitService, private produitService: ProduitService) { }

  ngOnInit() {

    this.categorieProduitService.getProduitCategorie().subscribe(reponse => {
      this.categorieProduits = reponse;
    })

    this.produitService.getAllPoisson().subscribe(reponse => {
      this.produitsPoisson = reponse;
    })

    this.produitService.getAllCoquillage().subscribe(reponse => {
      this.produitsCoquillage = reponse;
    })

    this.produitService.getAllCrustace().subscribe(reponse => {
      this.produitsCrustace = reponse;
    })

    this.produitService.getAllPromotion().subscribe(reponse => {
      this.produitsPromotion = reponse;
    })
  }


  onLoadProduits(choixCategorie: string) {
    var res = {};
    if (choixCategorie === "0") {
      res = this.produitsPoisson
    }
    if (choixCategorie === "1") {
      res = this.produitsCoquillage
    }
    if (choixCategorie === "2") {
      res = this.produitsCrustace
    }
    let navigationExtras: NavigationExtras = {

      state: {
        produit: res
      }
    }
    this.router.navigate(['liste-produits'], navigationExtras);
  };
}
