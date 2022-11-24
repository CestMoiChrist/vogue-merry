import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'bateaux',
    loadChildren: () =>
      import('./bateaux/bateaux.module').then((m) => m.BateauxPageModule),
  },
  {
    path: 'single-bateau',
    loadChildren: () =>
      import('./single-bateau/single-bateau.module').then(
        (m) => m.SingleBateauPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'single-produit',
    loadChildren: () =>
      import('./single-produit/single-produit.module').then(
        (m) => m.SingleProduitPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
