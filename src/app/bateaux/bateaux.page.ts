import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Bateau } from '../models/bateau';
import { BateauService } from '../services/bateau.service';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  bateauxList: Bateau[] = [];

  constructor(private bateauService: BateauService, private router: Router) {}

  ngOnInit() {
    this.bateauService.getAllBateaux().subscribe(
      (res) => {
        this.bateauxList = res;
      },
      (err) => {
        console.log(err);
        this.router.navigate(['/error']);
      }
    );
  }

  onLoadBateau(bateau: {
    name: string;
    subname: string;
    description: string[];
    image: string;
  }) {
    let navigationExtras: NavigationExtras = {
      state: {
        bateau: bateau,
      },
    };
    this.router.navigate(['/single-bateau'], navigationExtras);
  }
}
