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


  async onGotoPanier(){
    const modal = await this.modal.create({
      component : PanierPage,
    });
     return modal.present();
}



onGoToHome(){
  this.router.navigate(['/home']);
}

}
