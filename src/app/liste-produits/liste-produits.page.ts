import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';
import { ToastController } from '@ionic/angular';
import { panier } from '../models/panier';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.page.html',
  styleUrls: ['./liste-produits.page.scss'],
})
export class ListeProduitsPage implements OnInit {

  produits: Produit[] = [];
  handlerMessage = '';
  roleMessage = '';
  cart : panier[] = [];
  total : number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private toast:ToastController, public storage: Storage) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.produits = this.router.getCurrentNavigation()!.extras.state!['produits'];
        console.log(this.produits);
      }
    });
  }

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

  onLoadProduit(produit: {
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
        produit: produit
      }
    };
    this.router.navigate(['single-produit'], navigationExtras);
  }

  async presentToast(position:'top' | 'middle' | 'bottom'){
    console.log("present toast")
    const toast = await this.toast.create({
      message: "Produit ajouté au panier",
      duration: 1500,
      position: 'bottom',
      // color?: "Blue",
    })
    await toast.present();
    console.log(toast)
  }

  async deleteToast(position:'top' | 'middle' | 'bottom'){
    console.log("deleteToast");
    const toast = await this.toast.create({
      message: "Etes vous sûres de vouloir supprimer l'article?",
      duration: 3000,
      position: position,
      buttons: [
        {
          text: 'Oui',
          role: 'info',
          handler: () => { 
            this.handlerMessage = 'Article supprimé';
            this.removeItem(); }
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

  removeItem(): void{
    console.log("hello")
    // this.deleteToast('bottom');
    // this.cartItems.splice(index,1);
    //this.storage.set("cart", this.cartItems)
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
          data.push({
            item: produit,
            qty: 1,
            amount: produit.price,
            discount : produit.discount
          })
        }
      }
      this.storage.set("Cart", data)
    })
  }

  onGoToPanier(){
    this.router.navigate(['panier']);
  }


}

