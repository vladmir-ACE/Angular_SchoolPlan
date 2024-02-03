import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevendeurRoutingModule } from './revendeur-routing.module';
import { RevendeurComponent } from './revendeur.component';
import { MenueComponent } from './menue/menue.component';
import { DashComponent } from './dash/dash.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeComponent } from './commande/commande.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { TypeProduitComponent } from './type-produit/type-produit.component';
import { AuteurComponent } from './auteur/auteur.component';
import { LivreComponent } from './livre/livre.component';
import { TableModule } from 'primeng/table';
import { CreateComponent } from './auteur/create/create.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './auteur/update/update.component';


@NgModule({
  declarations: [
    RevendeurComponent,
    MenueComponent,
    DashComponent,
    ProduitComponent,
    CommandeComponent,
    FooterComponent,
    TypeProduitComponent,
    AuteurComponent,
    LivreComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    RevendeurRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule
    
  ]
})
export class RevendeurModule { }
