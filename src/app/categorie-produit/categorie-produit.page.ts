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
  constructor(private router: Router,
    private categorieProduitService: CategorieProduitService) { }

  ngOnInit() {
    this.categorieProduitService.getProduitCategorie().subscribe(reponse => {
      this.categorieProduits = reponse;
      console.log("y a quoi dedans" + this.categorieProduits)
    })
  }
  onLoadCategorieProduits(categorieProduits: { id: string, categorieProduit: string }) {
    let navigationExtras: NavigationExtras = {
      state: {
        categorie: categorieProduits

      }
    };
    this.router.navigate(['/liste-produits'], navigationExtras);
  }

}
