import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PointRelais } from '../models/pointRelais';
import { PointRelaisService } from '../services/point-relais.service';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})

export class CommandePage implements OnInit {
  total : number | undefined ;
  pointRelais : PointRelais[] = [];
  res : string = "";
  handlerMessage = '';


  constructor(public storage : Storage, private pointRelaisService : PointRelaisService, public modalCtrl : ModalController, private toast : ToastController) { }

  ngOnInit(
    
  ) {
    this.pointRelaisService.getPointRelais().subscribe(reponse =>{
      this.pointRelais = reponse;
    })

    const maDate = new Date()
    const lejour = maDate.getDay();
    
    if(lejour == 0 || lejour == 1 || lejour == 2 ){
      this.res = "Mercredi";
    }
    if(lejour == 3 || lejour == 4 || lejour == 5 ){
      this.res = "Samedi";
    }
    if(lejour == 6 ){
      this.res = "Dimanche";
    }

  }

  dismiss() : void {
    this.modalCtrl.dismiss();
  }

  async confirmerToast(){
    const toast = await this.toast.create({
      message: "Envoyer votre commande de " + this.total + " euros à Thibault ?",
      duration: 25000,
      position: "bottom",
      
      buttons: [
        {
          text: 'Oui',
          role: 'info',
          handler: () => { 
            this.storage.clear();
          }
        },
        {
          text: 'non',
          role: 'cancel',
          handler: () => { 
            this.handlerMessage = "";
          }
        }
      ]
    })
    await toast.present();
  }
}
