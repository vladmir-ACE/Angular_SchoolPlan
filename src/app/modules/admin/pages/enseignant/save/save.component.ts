import { Component } from '@angular/core';
import { Enseignant } from '../../../../../models/enseignant';
import { EnseignantService } from '../../../services/enseignant/enseignant.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrl: './save.component.css'
})
export class SaveComponent {

  enseignant:Enseignant =new Enseignant("","","","","");
  constructor(private enseignantService:EnseignantService,private router:Router) { }


  onSubmit(){
    this.enseignantService.postEnseignant(this.enseignant).subscribe(
      (data)=>{
      if (data){
        this.enseignant=new Enseignant("","","","","");
        Swal.fire({ text: 'Enseignant Save Sucess', icon: 'success'});
        
      }
    },
    (error)=>{
      Swal.fire({ text: 'Login Error ;Try Again', icon: 'error'});
      console.log(error)
    }
    
    )
  }

  

}
