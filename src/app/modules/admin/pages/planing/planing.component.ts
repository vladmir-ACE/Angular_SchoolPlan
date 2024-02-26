import { Component } from '@angular/core';
import { PlaningService } from '../../services/planing/planing.service';
import { Router } from '@angular/router';
import { Planing } from '../../../../models/planing';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrl: './planing.component.css'
})
export class PlaningComponent {
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
  deletePlaning(id:number){
    Swal.fire({
      title: 'vous ete sur?',
      text: "Cette  action est ireversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:'Suprimer definitivement planing !' 
    }).then((result) => {
      if(result.isConfirmed){
        this.planingService.deletePlaning(id).subscribe(
          (value:Planing)=>{
            console.log("Planing Supprimer");

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/admin/planing']);
         },
         (error:String)=>{
          console.log(error)
         },
         ()=>{
   
         }
        );
      }
    })

  }

}
