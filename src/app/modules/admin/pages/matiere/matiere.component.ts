import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../../services/matiere/matiere.service';
import { Router } from '@angular/router';
import { Matiere } from '../../../../models/matiere';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrl: './matiere.component.css'
})
export class MatiereComponent implements OnInit {

  constructor(private matiereService:MatiereService,private router: Router){

      
  }

  ngOnInit(): void {
    this.getAllMatiere()
  }
  

  matieres: Array<Matiere>=[] ;

  selectMatiere: Matiere | undefined;

  
  
  getAllMatiere(){
    this.matiereService.getAllMatiere().subscribe(
      (value:Array<Matiere>)=>{
         this.matieres=value;
         
      },
      (error:String)=>{

      },
      ()=>{

      }
    );
  }


  // get current to update
  getSelectedMatiere(matiere: Matiere){
   
    this.selectMatiere=matiere;
    this.router.navigate(['/admin/matiere/update', { matiere: JSON.stringify(matiere) }])

  }

  //delete 
  deleteMatiere(id:number){
    Swal.fire({
      title: 'vous ete sur?',
      text: "Cette  action est ireversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:'Suprimer definitivement matiere !' 
    }).then((result) => {
      if(result.isConfirmed){
        this.matiereService.deleteMatiere(id).subscribe(
          (value:Matiere)=>{
            console.log("Matiere Supprimer");

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/admin/matiere']);
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





