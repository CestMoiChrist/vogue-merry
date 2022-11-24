import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-bateau',
  templateUrl: './single-bateau.page.html',
  styleUrls: ['./single-bateau.page.scss'],
})
export class SingleBateauPage implements OnInit {
  bateauName!: string;
  bateau!: {
    name: string;
    subname: string;
    description: string[];
    image: string;
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.bateau =
          this.router.getCurrentNavigation()!.extras.state!['bateau'];
      }
    });
  }

  ngOnInit() {}
}
