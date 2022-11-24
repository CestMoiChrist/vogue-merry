import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if(this.router.getCurrentNavigation()!.extras.state){
          this.produit = this.router.getCurrentNavigation()!.extras.state!['produit'];
          console.log(this.produit);
        }
    });
  }

}
