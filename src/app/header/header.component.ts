import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { PanierPage } from '../panier/panier.page';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  constructor(public storage: Storage, private router : Router, public modal : ModalController) { }

  ngOnInit() { }

// Jessaye de créer un modal pour créer la page panier seulement s'il n'existe pas mais je n'y arrive pas
//   async onGotoPanier(){
//     const modal = await this.modal.create({
//       component : PanierPage,
//       breakpoints: [0, 0.3, 0.5, 0.8],
//       initialBreakpoint: 0.5
//     });
//     modal.present;
// }
onGotoPanier(){
  this.router.navigate(['/panier']);
}


onGoToHome(){
  this.router.navigate(['/home']);
}

}
