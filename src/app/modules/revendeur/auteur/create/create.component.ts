import { Component } from '@angular/core';
import { Auteur } from '../../../../models/auteur';
import { AuteurService } from '../../../../services/auteur.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  nom:string="";
  prenom:string="";
  age:number=0;

  constructor(private auteurService: AuteurService){}

  onSubmit(){
    let auteur:Auteur=new Auteur(this.nom,this.prenom,this.age);

    this.auteurService.postAuteur(auteur).subscribe(
      (value:Auteur)=>{
        console.log("auteur save success :",value);
        Swal.fire({ text: 'Save Sucess!', icon: 'success'});
      },
      error=>{
        console.error("Error while saving author ",error)
      }
    );


    




  }








}
