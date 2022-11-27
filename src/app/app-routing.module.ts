
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'single-bateau',
    loadChildren: () => import('./single-bateau/single-bateau.module').then(m => m.SingleBateauPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)

  },
  {
    path: 'single-produit',
    loadChildren: () => import('./single-produit/single-produit.module').then(m => m.SingleProduitPageModule)
  },
  {
    path: 'liste-produits',
    loadChildren: () => import('./liste-produits/liste-produits.module').then(m => m.ListeProduitsPageModule)
  },
  {
    path: 'categorie-produit',
    loadChildren: () => import('./categorie-produit/categorie-produit.module').then(m => m.CategorieProduitPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'single-restaurant',
    loadChildren: () => import('./single-restaurant/single-restaurant.module').then( m => m.SingleRestaurantPageModule)
  },
  {
    path: 'list-recette',
    loadChildren: () => import('./list-recette/list-recette.module').then( m => m.ListRecettePageModule)
  },
  {
    path: 'single-recette',
    loadChildren: () => import('./single-recette/single-recette.module').then( m => m.SingleRecettePageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
