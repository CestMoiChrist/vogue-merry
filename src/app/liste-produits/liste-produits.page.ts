import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToastOptions } from '@ionic/angular';
import { getRenderingRef } from 'ionicons/dist/types/stencil-public-runtime';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.page.html',
  styleUrls: ['./liste-produits.page.scss'],
})
export class ListeProduitsPage implements OnInit {

  produits: Produit[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private toast: ToastController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.produits = this.router.getCurrentNavigation()!.extras.state!['produits'];
        console.log(this.produits);
      }
    });
  }

  ngOnInit() {

  }

  onLoadProduit(produit: {
    id:            string;
    name:         string;
    category:      number;
    price:         number;
    unit:          number;
    availability:  boolean;
    sale:          boolean;
    discount:      number;
    comments:      string;
    owner:         string;}){
    let navigationExtras: NavigationExtras = {
      state: {
        produit: produit
      }
    };
    this.router.navigate(['single-produit'], navigationExtras);
  }

  async presentToast(position:'top' | 'middle' | 'bottom'){
    const toast = await this.toast.create({
      message: "Les alertes fonctionnent",
      duration: 1500,
      position: position,
      // color?: "Blue",
    })
    await toast.present();
    console.log(toast)
  }


}

