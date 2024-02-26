import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    EnseignantComponent
  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    TableModule
  ]
})
export class EnseignantModule { }
