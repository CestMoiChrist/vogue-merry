import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private route: ActivatedRoute, private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.produit = this.router.getCurrentNavigation()!.extras.state!['produit'];
        console.log(this.produit);
      }
    });
  }

  addToCart(): void {
    this.storage.create();
    this.storage.set("produit", "Test")
      .then(value => alert("La valeur est " + value))
      .catch(err => console.log(err));
  }
  getCartElement(): void {
    this.storage.get("test")
      .catch(err => console.log(err))
      .then(value => ("La valeur est " + value))
  }

}
