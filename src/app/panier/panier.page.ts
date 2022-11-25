import { Component, OnInit } from '@angular/core';
import { panier } from '../models/panier';
import { Storage } from '@ionic/storage-angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  cart : panier[] = [];
  total : number = 0;
  constructor(public storage : Storage, public modalCtrl : ModalController, private router : Router) {}

  ngOnInit() { 
    if (this.storage != null) {
      this.storage.create();
    }
    this.storage.get("Cart")
    .then((data : panier[])=>{
      this.cart = data;
      this.cart.forEach((element : panier)=>{
        this.total += ((element.item.price * element.qty) - element.item.discount)
      })
    })
    .catch(err =>{
      console.log("Erreur", err);
    })
  }

  closeModal() : void {
    this.modalCtrl.dismiss();
  }

}
