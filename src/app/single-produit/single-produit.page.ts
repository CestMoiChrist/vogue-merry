import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.page.html',
  styleUrls: ['./single-produit.page.scss'],
})
export class SingleProduitPage implements OnInit {
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

  constructor(private route: ActivatedRoute, private router: Router, private toast: ToastController) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if(this.router.getCurrentNavigation()!.extras.state){
          this.produit = this.router.getCurrentNavigation()!.extras.state!['produit'];
          console.log(this.produit);
        }
    });
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
