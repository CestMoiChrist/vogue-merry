import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-recette',
  templateUrl: './single-recette.page.html',
  styleUrls: ['./single-recette.page.scss'],
})
export class SingleRecettePage implements OnInit {
  recette!: {
    id:            string;
    name:          string;
    img:           string;
    description:   string;
   }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()!.extras.state){
        this.recette = this.router.getCurrentNavigation()!.extras.state!['recette'];
        console.log(this.recette);
      }
    });
  }

}
