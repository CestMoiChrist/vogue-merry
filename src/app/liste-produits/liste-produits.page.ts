import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.page.html',
  styleUrls: ['./liste-produits.page.scss'],
})
export class ListeProduitsPage implements OnInit {
  produit!: {
    id:            string;
    name:          string;
    category:      number;
    price:         number;
    unit:          number;
    availability:  boolean;
    sale:          boolean;
    discount:      number;
    comments:      string;
    owner:         string;
   }
  listPoisson: Produit[]=[];
  listCoquillage: Produit[]=[];
  listCrustace: Produit[]=[];
  listPromotion: Produit[]=[];

  constructor(private router: Router, private produitService: ProduitService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()!.extras.state){
        this.produit = this.router.getCurrentNavigation()!.extras.state!['produit'];
        console.log(this.produit);
      }

      this.produitService.getAllPoisson().subscribe(poisson =>{
        this.listPoisson = poisson;
        console.log(this.listPoisson);
      })

      this.produitService.getAllCoquillage().subscribe(coquillage =>{
        this.listCoquillage = coquillage;
        console.log(this.listCoquillage);
      })

      this.produitService.getAllCrustace().subscribe(crustace =>{
        this.listCrustace = crustace;
        console.log(this.listCrustace);
      })

      this.produitService.getAllPromotion().subscribe(promotion =>{
        this.listPromotion = promotion;
        console.log(this.listPromotion);
      })
  })

}


}

