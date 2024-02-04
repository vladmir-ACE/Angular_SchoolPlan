import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashComponent } from './dash/dash.component';
import { EnseignantComponent } from './pages/enseignant/enseignant.component';
import { SaveComponent } from './pages/enseignant/save/save.component';
import { UpdateComponent } from './pages/enseignant/update/update.component';
import { MatiereComponent } from './pages/matiere/matiere.component';
import { SaveMatiereComponent } from './pages/matiere/save-matiere/save-matiere.component';
import { UpdateMatiereComponent } from './pages/matiere/update-matiere/update-matiere.component';
import { AnneComponent } from './pages/anne/anne.component';
import { SaveAnneComponent } from './pages/anne/save-anne/save-anne.component';
import { UpdateAnneComponent } from './pages/anne/update-anne/update-anne.component';
import { ClasseComponent } from './pages/classe/classe.component';
import { SaveClasseComponent } from './pages/classe/save-classe/save-classe.component';
import { UpdateClasseComponent } from './pages/classe/update-classe/update-classe.component';
import { CoursComponent } from './pages/cours/cours.component';
import { SaveCoursComponent } from './pages/cours/save-cours/save-cours.component';
import { UpdateCoursComponent } from './pages/cours/update-cours/update-cours.component';
import { PlaningComponent } from './pages/planing/planing.component';
import { SavePlaningComponent } from './pages/planing/save-planing/save-planing.component';
import { UpdatePlaningComponent } from './pages/planing/update-planing/update-planing.component';
import { FindEnseigantComponent } from './pages/enseignant/find-enseigant/find-enseigant.component';
import { FindMatiereComponent } from './pages/matiere/find-matiere/find-matiere.component';

const routes: Routes = [

  {path:'',component:AdminComponent,

  children:[
    {path:'',redirectTo:"/admin/dash",pathMatch:'full'},
    {path:'admin/dash',component:DashComponent},
    //Enseignant
    {path:'admin/enseignant',component:EnseignantComponent},
    {path:'admin/enseignant/create',component:SaveComponent},
    {path:'admin/enseignant/update',component:UpdateComponent},
    {path:'admin/enseignant/find',component:FindEnseigantComponent},


    //Matière
    { path: 'admin/matiere', component: MatiereComponent },
    { path: 'admin/matiere/create', component: SaveMatiereComponent },
    { path: 'admin/matiere/update', component: UpdateMatiereComponent },
    { path: 'admin/matiere/find', component: FindMatiereComponent },

    //Anne
    { path: 'admin/anne', component: AnneComponent },
    { path: 'admin/anne/create', component: SaveAnneComponent },
    { path: 'admin/anne/update', component: UpdateAnneComponent },
    //Classe
    { path: 'admin/classe', component: ClasseComponent },
    { path: 'admin/classe/create', component: SaveClasseComponent },
    { path: 'admin/classe/update', component: UpdateClasseComponent },
    //Cours
    { path: 'admin/cours', component: CoursComponent },
    { path: 'admin/cours/create', component: SaveCoursComponent },
    { path: 'admin/cours/update', component: UpdateCoursComponent },
    //planing
    { path: 'admin/planing', component: PlaningComponent },
    { path: 'admin/planing/create', component: SavePlaningComponent },
    { path: 'admin/planing/update', component: UpdatePlaningComponent }

    
    
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
