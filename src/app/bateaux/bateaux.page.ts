import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  bateauxList = [
    {
      name: 'De la brise',
      subname: 'XXX YYY ZZZ',
      description: [
        "Qu'il est chaud le soleil",
        'Quand nous sommes en vacances',
        "Y'a d'la joie, des hirondelles",
        "C'est le sud de la France",
        'Papa bricole au garage ',
        'Maman lit dans la chaise longue ',
        'Dans ce joli paysage ',
        'Moi, je me balade en tongs ',
        '',
        'Que du bonheur! ',
        'Que du bonheur! ',
      ],
      image:
        'https://www.arcachon-peche-plaisance.fr/wp-content/uploads/2019/03/bateau-guide-peche-arcachon-1024x686.jpg',
    },
    {
      name: 'Saphir',
      subname: 'XXX YYY ZZZ',
      description: [
        "Qu'il est chaud le soleil",
        'Quand nous sommes en vacances',
        "Y'a d'la joie, des hirondelles",
        "C'est le sud de la France",
        'Papa bricole au garage ',
        'Maman lit dans la chaise longue ',
        'Dans ce joli paysage ',
        'Moi, je me balade en tongs ',
        '',
        'Que du bonheur! ',
        'Que du bonheur! ',
      ],
      image:
        'https://www.peche-belleile.com/media/widgetkit/bateau-guide-peche-bretagne-01-4614ca256d97e5ba71b1d5b3f6594d16.jpg',
    },
    {
      name: 'Gast Micher',
      subname: 'XXX YYY ZZZ',
      description: [
        "Qu'il est chaud le soleil",
        'Quand nous sommes en vacances',
        "Y'a d'la joie, des hirondelles",
        "C'est le sud de la France",
        'Papa bricole au garage ',
        'Maman lit dans la chaise longue ',
        'Dans ce joli paysage ',
        'Moi, je me balade en tongs ',
        '',
        'Que du bonheur! ',
        'Que du bonheur! ',
      ],
      image:
        'https://www.chantier-allemand.com/wp-content/uploads/2016/12/Vedette-9m00-1.jpg',
    },
    {
      name: 'Aquilon',
      subname: 'XXX YYY ZZZ',
      description: [
        "Qu'il est chaud le soleil",
        'Quand nous sommes en vacances',
        "Y'a d'la joie, des hirondelles",
        "C'est le sud de la France",
        'Papa bricole au garage ',
        'Maman lit dans la chaise longue ',
        'Dans ce joli paysage ',
        'Moi, je me balade en tongs ',
        '',
        'Que du bonheur! ',
        'Que du bonheur! ',
      ],
      image: 'https://www.frapp.org/photo/HPIM892721.jpg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

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
