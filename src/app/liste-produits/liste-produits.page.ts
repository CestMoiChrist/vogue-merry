import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.page.html',
  styleUrls: ['./liste-produits.page.scss'],
})
export class ListeProduitsPage implements OnInit {

  produits: Produit[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.produits = this.router.getCurrentNavigation()!.extras.state!['produits'];
        console.log(this.produits);
      }
    });
  }

  ngOnInit() {
  }


}

