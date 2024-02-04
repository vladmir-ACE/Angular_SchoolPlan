import { Component } from '@angular/core';
import { Classe } from '../../../../../models/classe';
import { ClasseService } from '../../../services/classe/classe.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-classe',
  templateUrl: './save-classe.component.html',
  styleUrl: './save-classe.component.css'
})
export class SaveClasseComponent {
  
  classe:Classe =new Classe("","",);
constructor(private classeService:ClasseService,private router:Router) { }


onSubmit(){
  this.classeService.postClasse(this.classe).subscribe(
    (data)=>{
    if (data){
      this.classe=new Classe("","");
      Swal.fire({ text: 'Classe Save Sucess', icon: 'success'});
      
    }
  },
  (error)=>{
    Swal.fire({ text: 'Login Error ;Try Again', icon: 'error'});
    console.log(error)
  }
  
  )
}



}
