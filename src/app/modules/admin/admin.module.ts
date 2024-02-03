import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashComponent } from './dash/dash.component';
import { FooterComponent } from './footer/footer.component';
import { MenueComponent } from './menue/menue.component';
import { EnseignantComponent } from './pages/enseignant/enseignant.component';
import { MatiereComponent } from './pages/matiere/matiere.component';
import { SaveComponent } from './pages/enseignant/save/save.component';
import { UpdateComponent } from './pages/enseignant/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { SaveMatiereComponent } from './pages/matiere/save-matiere/save-matiere.component';
import { UpdateMatiereComponent } from './pages/matiere/update-matiere/update-matiere.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashComponent,
    FooterComponent,
    MenueComponent,
    EnseignantComponent,
    MatiereComponent,
    SaveComponent,
    UpdateComponent,
    SaveMatiereComponent,
    UpdateMatiereComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule
  ]
})
export class AdminModule { }
