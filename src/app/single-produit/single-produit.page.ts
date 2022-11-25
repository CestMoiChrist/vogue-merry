import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ToastOptions } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { panier } from '../models/panier';
import { Produit } from '../models/produit';


@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.page.html',
  styleUrls: ['./single-produit.page.scss'],
})
export class SingleProduitPage implements OnInit {
  produit!: {
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
  }


  constructor(private route: ActivatedRoute, private router: Router, public storage: Storage, private toast: ToastController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.produit = this.router.getCurrentNavigation()!.extras.state!['produit'];
        console.log(this.produit);
      }
    });
  }
  addToCart(produit: Produit): void {
    var added: boolean = false;
    if (this.storage != null) {
      this.storage.create();
    }
    this.storage.get("cart").then((data: panier[]) => {
      console.log(" 1er " + data)
      if (data === null) {
        data = [];
        data.push({
          item: produit,
          qty: 1,
          amount: produit.price
        })
        console.log(data)
      }
      else {
        //si le panier est vide
        console.log("on arrive ici")
        for (let i = 0; i < data.length; i++) {
          const element: panier = data[i];
          if (produit.id === element.item.id) {
            element.qty += 1;
            element.amount += produit.price;
            added = true;
          }
        }
        if (!added) {
          // le panier n'est pas vide et ne contient pas d'article
          data.push({
            item: produit,
            qty: 1,
            amount: produit.price
          })
        }
      }
      this.storage.set("cart", data)
        .then(
          this.presentToast
        )
        .catch(err => {
          console.log("Erreur", err);
        })
    })
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toast.create({
      message: "Votre produit a été mis à jour",
      duration: 1500,
      position: position,
      // color?: "Blue",
    })
    await toast.present();
    console.log(toast)
  }

}
