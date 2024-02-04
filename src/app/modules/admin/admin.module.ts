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
import { AnneComponent } from './pages/anne/anne.component';
import { ClasseComponent } from './pages/classe/classe.component';
import { SaveClasseComponent } from './pages/classe/save-classe/save-classe.component';
import { UpdateClasseComponent } from './pages/classe/update-classe/update-classe.component';
import { UpdateAnneComponent } from './pages/anne/update-anne/update-anne.component';
import { SaveAnneComponent } from './pages/anne/save-anne/save-anne.component';
import { CoursComponent } from './pages/cours/cours.component';
import { PlaningComponent } from './pages/planing/planing.component';
import { SaveCoursComponent } from './pages/cours/save-cours/save-cours.component';
import { UpdateCoursComponent } from './pages/cours/update-cours/update-cours.component';
import { UpdatePlaningComponent } from './pages/planing/update-planing/update-planing.component';
import { SavePlaningComponent } from './pages/planing/save-planing/save-planing.component';
import { FindEnseigantComponent } from './pages/enseignant/find-enseigant/find-enseigant.component';
import { FindMatiereComponent } from './pages/matiere/find-matiere/find-matiere.component';


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
    UpdateMatiereComponent,
    AnneComponent,
    ClasseComponent,
    SaveClasseComponent,
    UpdateClasseComponent,
    UpdateAnneComponent,
    SaveAnneComponent,
    CoursComponent,
    PlaningComponent,
    SaveCoursComponent,
    UpdateCoursComponent,
    UpdatePlaningComponent,
    SavePlaningComponent,
    FindEnseigantComponent,
    FindMatiereComponent
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
