import { Component } from '@angular/core';
import { PlaningService } from '../admin/services/planing/planing.service';
import { Router } from '@angular/router';
import { Planing } from '../../models/planing';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrl: './enseignant.component.css'
})
export class EnseignantComponent {

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
  getSelectedPlaning(planing: Planing){
   
    this.selectPlaning=planing;
    this.router.navigate(['/admin/planing/update', { planing: JSON.stringify(planing) }])

  }

  //delete 


}
