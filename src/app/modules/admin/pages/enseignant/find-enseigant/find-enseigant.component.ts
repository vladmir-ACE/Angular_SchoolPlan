import { Component } from '@angular/core';
import { Enseignant } from '../../../../../models/enseignant';
import { EnseignantService } from '../../../services/enseignant/enseignant.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-find-enseigant',
  templateUrl: './find-enseigant.component.html',
  styleUrl: './find-enseigant.component.css'
})
export class FindEnseigantComponent {

  enseignants: Array<Enseignant>=[] ;
  find:string="";
  selectEnseignant: Enseignant=new Enseignant("","","","","");


  constructor(private enseignantService:EnseignantService,private router: Router){}

  onSubmit(){
    this.enseignantService.findtEnseignant(this.find).subscribe(
      (data)=>{
      if (data!=null){
        this.enseignants=data
        console.log(data);
        
      }else{
        console.log(data);
        Swal.fire({ text: 'Enseignant not  find', icon: 'error'});
      }
    },
    (error)=>{
      Swal.fire({ text: 'Error ;Try Again', icon: 'error'});
      console.log(error)
    }
    
    )
  }



    // get current to update
    getSelectedEnseignant(enseignant: Enseignant){
   
      this.selectEnseignant=enseignant;
      this.router.navigate(['/admin/enseignant/update', { enseignant: JSON.stringify(enseignant) }])
  
    }
  
    //delete 
    deleteEnseignant(id:number){
      Swal.fire({
        title: 'vous ete sur?',
        text: "Cette  action est ireversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText:'Suprimer definitivement enseignant !' 
      }).then((result) => {
        if(result.isConfirmed){
          this.enseignantService.deleteEnseignant(id).subscribe(
            (value:Enseignant)=>{
              console.log("Enseignant Supprimer");
  
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/admin/enseignant']);
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
