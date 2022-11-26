import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
    this.storage.get("Cart").then((data: panier[]) => {
      if (data === null || data.length === 0) {
        data = [];
        data.push({
          item: produit,
          qty: 1,
          amount: produit.price,
          discount : produit.discount
        })
        console.log(data)
      }
      else {
        //s'il y a deja un produit
        for (let i = 0; i < data.length; i++) {
          const element: panier = data[i];
          if (produit.id === element.item.id) {
            element.qty += 1;
            element.amount += produit.price;
            element.discount += produit.discount;
            added = true;
          }
        }
        if (!added) {
          // le panier n'est pas vide et ne contient pas d'article
          data.push({
            item: produit,
            qty: 1,
            amount: produit.price,
            discount : produit.discount
          })
        }
      }
      this.storage.set("Cart", data)
        .then(
          this.presentToast
        )
        .catch(err => {
          console.log("Erreur", err);
        })
    })
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: "Votre produit a été mis à jour",
      duration: 1500,
      position: "bottom",
      // color?: "Blue",
    })
    await toast.present();
    console.log(toast)
  }

}
