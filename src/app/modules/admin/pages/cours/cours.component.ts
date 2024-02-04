import { Component, OnInit } from '@angular/core';
import { CoursService } from '../../services/cours/cours.service';
import { Router } from '@angular/router';
import { Cours } from '../../../../models/cours';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit {
  constructor(private coursService:CoursService,private router: Router){

      
  }

  ngOnInit(): void {
    this.getAllCours()
  }
  

  courss: Array<Cours>=[] ;

  selectCours: Cours | undefined;

  
  
  getAllCours(){
    this.coursService.getAllCours().subscribe(
      (value:Array<Cours>)=>{
         this.courss=value;
         
      },
      (error:String)=>{

      },
      ()=>{

      }
    );
  }


  // get current to update
  getSelectedCours(cours: Cours){
   
    this.selectCours=cours;
    this.router.navigate(['/admin/cours/update', { cours: JSON.stringify(cours) }])

  }

  //delete 
  deleteCours(id:number){
    Swal.fire({
      title: 'vous ete sur?',
      text: "Cette  action est ireversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:'Suprimer definitivement cours !' 
    }).then((result) => {
      if(result.isConfirmed){
        this.coursService.deleteCours(id).subscribe(
          (value:Cours)=>{
            console.log("Cours Supprimer");

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/admin/cours']);
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
