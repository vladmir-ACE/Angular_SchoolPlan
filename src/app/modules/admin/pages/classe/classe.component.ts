import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../../services/classe/classe.service';
import { Router } from '@angular/router';
import { Classe } from '../../../../models/classe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css'
})
export class ClasseComponent implements OnInit{
  constructor(private classeService:ClasseService,private router: Router){

      
  }

  ngOnInit(): void {
    this.getAllClasse()
  }
  

  classes: Array<Classe>=[] ;

  selectClasse: Classe | undefined;

  
  
  getAllClasse(){
    this.classeService.getAllClasse().subscribe(
      (value:Array<Classe>)=>{
         this.classes=value;
         
      },
      (error:String)=>{

      },
      ()=>{

      }
    );
  }


  // get current to update
  getSelectedClasse(classe: Classe){
   
    this.selectClasse=classe;
    this.router.navigate(['/admin/classe/update', { classe: JSON.stringify(classe) }])

  }

  //delete 
  deleteClasse(id:number){
    Swal.fire({
      title: 'vous ete sur?',
      text: "Cette  action est ireversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:'Suprimer definitivement classe !' 
    }).then((result) => {
      if(result.isConfirmed){
        this.classeService.deleteClasse(id).subscribe(
          (value:Classe)=>{
            console.log("Classe Supprimer");

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/admin/classe']);
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
