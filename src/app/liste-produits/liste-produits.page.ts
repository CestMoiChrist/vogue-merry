import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.page.html',
  styleUrls: ['./liste-produits.page.scss'],
})
export class ListeProduitsPage implements OnInit {

  produits: Produit[] = [];
  handlerMessage = '';
  roleMessage = '';

  constructor(private router: Router, private route: ActivatedRoute, private toast:ToastController) {
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

  // async presentToast(position:'top' | 'middle' | 'bottom'){
  //   const toast = await this.toast.create({
  //     message: "Les alertes changent",
  //     duration: 1500,
  //     position: position,
  //     // color?: "Blue",
  //   })
  //   await toast.present();
  //   console.log(toast)
  // }

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
      // color?: "Blue",
    })
    await toast.present();
    // const { role } = await toast.onDidDismiss();
    // this.roleMessage = `Dismissed with role: ${role}`;
  }

  removeItem(): void{
    console.log("hello")
    // this.deleteToast('bottom');
    // this.cartItems.splice(index,1);
    //this.storage.set("cart", this.cartItems)
  }


}

