import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bateau } from '../models/bateau';

@Component({
  selector: 'app-single-bateau',
  templateUrl: './single-bateau.page.html',
  styleUrls: ['./single-bateau.page.scss'],
})
export class SingleBateauPage implements OnInit {
  bateauName!: string;

  bateau!: Bateau;

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
