import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { Recette } from '../models/recette';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-recette',
  templateUrl: './list-recette.page.html',
  styleUrls: ['./list-recette.page.scss'],
})
export class ListRecettePage implements OnInit {
  recetteList: Recette[]= [];

  constructor(private recetteService: RecetteService, private router: Router) { }

  ngOnInit() {
    this.recetteService.getAllRecette().subscribe((res) => {
      this.recetteList = res;
      console.log(this.recetteList)
    },
    err =>{
      console.log("error")
    })

  }

  onLoadRecette(recette: {
    id: string, 
    name: string,
    img:string, 
    description:string}){
    console.log("je suis dans la fonction "+ recette)
    let navigationExtras: NavigationExtras = {
      state: {
        recette: recette
      }
    };
    this.router.navigate(['single-recette'], navigationExtras);
  }

}
