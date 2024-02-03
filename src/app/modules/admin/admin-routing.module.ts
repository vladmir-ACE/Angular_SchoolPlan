import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashComponent } from './dash/dash.component';
import path from 'path';
import { EnseignantComponent } from './pages/enseignant/enseignant.component';
import { SaveComponent } from './pages/enseignant/save/save.component';
import { UpdateComponent } from './pages/enseignant/update/update.component';
import { MatiereComponent } from './pages/matiere/matiere.component';
import { SaveMatiereComponent } from './pages/matiere/save-matiere/save-matiere.component';
import { UpdateMatiereComponent } from './pages/matiere/update-matiere/update-matiere.component';

const routes: Routes = [

  {path:'',component:AdminComponent,

  children:[
    {path:'',redirectTo:"/admin/dash",pathMatch:'full'},
    {path:'admin/dash',component:DashComponent},
    //Enseignant
    {path:'admin/enseignant',component:EnseignantComponent},
    {path:'admin/enseignant/create',component:SaveComponent},
    {path:'admin/enseignant/update',component:UpdateComponent},
    //Matière
    { path: 'admin/matiere', component: MatiereComponent },
    { path: 'admin/matiere/create', component: SaveMatiereComponent },
    { path: 'admin/matiere/update', component: UpdateMatiereComponent },
    //..
    
    
    
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
