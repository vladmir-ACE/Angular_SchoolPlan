import { Component, OnInit } from '@angular/core';
import { Auteur } from '../../../models/auteur';
import { AuteurService } from '../../../services/auteur.service';
import { error } from 'console';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrl: './auteur.component.css'
})
export class AuteurComponent implements OnInit {


  constructor(private auteurService:AuteurService,private router: Router){

      
  }

  ngOnInit(): void {
    this.getAllAuteur()
  }

  auteurs: Array<Auteur>=[] ;

  selectAuteur: Auteur | undefined;

//Old
  // getAllAuteur(){
  //   this.auteurs=this.auteurService.getAllAuteur();
  // }
  
  getAllAuteur(){
    this.auteurService.getAllAuteur().subscribe(
      (value:Array<Auteur>)=>{
         this.auteurs=value;
      },
      (error:String)=>{

      },
      ()=>{

      }
    );
  }

  getSelectedAuteur(auteur: Auteur){
   
    this.selectAuteur=auteur;
    this.router.navigate(['/revendeur/auteur/update', { auteur: JSON.stringify(auteur) }])

  }

  deleteAuteur(id:number){
    Swal.fire({
      title: 'vous ete sur?',
      text: "Cette  action est ireversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:'Suprimer definitivement auteur !' 
    }).then((result) => {
      if(result.isConfirmed){
        this.auteurService.deleteAuteur(id).subscribe(
          (value:Auteur)=>{
            console.log("Auteur Supprimer");

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/revendeur/auteur']);
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
