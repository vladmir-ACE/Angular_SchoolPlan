import { Component } from '@angular/core';
import { Matiere } from '../../../../../models/matiere';
import { MatiereService } from '../../../services/matiere/matiere.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-find-matiere',
  templateUrl: './find-matiere.component.html',
  styleUrl: './find-matiere.component.css'
})
export class FindMatiereComponent {


  matieres: Array<Matiere>=[] ;
  find:string="";
  selectMatiere: Matiere=new Matiere("","");


  constructor(private matiereService:MatiereService,private router: Router){}

  onSubmit(){
    this.matiereService.findtMatiere(this.find).subscribe(
      (data)=>{
      if (data!=null){
        this.matieres=data
        console.log(data);
        
      }else{
        console.log(data);
        Swal.fire({ text: 'Matiere not  find', icon: 'error'});
      }
    },
    (error)=>{
      Swal.fire({ text: 'Error ;Try Again', icon: 'error'});
      console.log(error)
    }
    
    )
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
