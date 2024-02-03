import { Component } from '@angular/core';
import { Matiere } from '../../../../../models/matiere';
import { MatiereService } from '../../../services/matiere/matiere.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-matiere',
  templateUrl: './save-matiere.component.html',
  styleUrl: './save-matiere.component.css'
})
export class SaveMatiereComponent {

  matiere:Matiere =new Matiere("","",);
  constructor(private matiereService:MatiereService,private router:Router) { }


  onSubmit(){
    this.matiereService.postMatiere(this.matiere).subscribe(
      (data)=>{
      if (data){
        this.matiere=new Matiere("","");
        Swal.fire({ text: 'Matiere Save Sucess', icon: 'success'});
        
      }
    },
    (error)=>{
      Swal.fire({ text: 'Login Error ;Try Again', icon: 'error'});
      console.log(error)
    }
    
    )
  }




}
