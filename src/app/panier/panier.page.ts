import { Component, OnInit } from '@angular/core';
import { panier } from '../models/panier';
import { Storage } from '@ionic/storage-angular';
import { AlertController, AlertOptions, ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommandePage } from '../commande/commande.page';




@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  cart : panier[] = [];
  total : number = 0;
  handlerMessage = '';
  constructor(public storage : Storage, public modalCtrl : ModalController, private router : Router, private toast : ToastController, public alertCtrl : AlertController) {}

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

  async deleteToast(article : panier, index : number){
    const toast = await this.toast.create({
      message: "Etes vous sûres de vouloir supprimer l'article " + article.item.name + " ?",
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: 'Oui',
          role: 'info',
          handler: () => { 
            this.handlerMessage = 'Article supprimé';
            let price : number = article.item.price;
            let qty : number = article.qty;
            let discount : number = article.discount;
            let myTotal : number = price * qty + discount;
            this.cart.splice(index, 1);
            this.storage.set("Cart", this.cart)
            .then((data)=>{
              this.total -=  myTotal;
              // ce toast ne fonctionne pas, me demandez pas pk jai le seum, je ne sais pas toast sans click externe
              // this.toast.create({
              //   message: this.handlerMessage,
              //   duration: 1000,
              //   position: "bottom",
              // });
              // this.toast;
            })
            .catch((error)=>{
              console.log("error",error)
            })
          }
        },
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => { 
            this.handlerMessage = "";
          }
        }
      ]
    })
    await toast.present();
  }

  async onGotoCommande(){
    const modal = await this.modalCtrl.create({
      component : CommandePage,
      componentProps: {total : this.total},
      cssClass: 'transparent-modal'
    });
     return modal.present();
}
}
