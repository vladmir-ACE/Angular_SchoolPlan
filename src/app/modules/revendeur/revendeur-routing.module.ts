import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevendeurComponent } from './revendeur.component';
import { DashComponent } from './dash/dash.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeComponent } from './commande/commande.component';
import { TypeProduitComponent } from './type-produit/type-produit.component';
import { AuteurComponent } from './auteur/auteur.component';
import { LivreComponent } from './livre/livre.component';
import { CreateComponent } from './auteur/create/create.component';
import { UpdateComponent } from './auteur/update/update.component';

const routes: Routes = [
  {
    path:'',
    component:RevendeurComponent,
    children:[
      { path: '', redirectTo:"/dash",pathMatch:'full' },
      { path: 'dash', component: DashComponent },
      {path:'produit',component:ProduitComponent},
      {path:'typeproduit',component:TypeProduitComponent},
      {path:'auteur',component:AuteurComponent},
      {path:'livre',component:LivreComponent},
      {path:'auteur/create',component:CreateComponent},
      {path:'auteur/update',component:UpdateComponent},

      //{path:'profil',component:RevprofilComponent},
      //{path:'vente',component:VenteComponent},
      {path:'commande',component:CommandeComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevendeurRoutingModule { }
