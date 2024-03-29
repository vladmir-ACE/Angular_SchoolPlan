import { Component } from '@angular/core';
import { PlaningService } from '../services/planing/planing.service';
import { Planing } from '../../../models/planing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {

  constructor(private planingService:PlaningService,private router: Router){

      
  }

  ngOnInit(): void {
    this.getAllPlaning()
  }
  

  planings: Array<Planing>=[] ;

  selectPlaning: Planing | undefined;

  
  
  getAllPlaning(){
    this.planingService.getAllPlaning().subscribe(
      (value:Array<Planing>)=>{
         this.planings=value;
         
      },
      (error:String)=>{

      },
      ()=>{

      }
    );
  }


  // get current to update
  

}
