import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadBateau(name: string) {
    let navigationExtras: NavigationExtras = {
      state: {
        appreilName:name
      }
    };
    this.router.navigate(['/single-bateau'],navigationExtras);
  }

}
