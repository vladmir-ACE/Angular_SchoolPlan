import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevendeurModule } from './modules/revendeur/revendeur.module';
import { AdminModule } from './modules/admin/admin.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AuthModule } from './modules/auth/auth.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RevendeurModule,
    AdminModule,
    HttpClientModule,
    TableModule,
    AuthModule,
  
  ],
  providers: [
    provideClientHydration(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
