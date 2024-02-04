import { Component, OnInit } from '@angular/core';
import { AnneService } from '../../services/anne/anne.service';
import { Router } from '@angular/router';
import { Anne } from '../../../../models/anne';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anne',
  templateUrl: './anne.component.html',
  styleUrl: './anne.component.css'
})
export class AnneComponent implements OnInit {

  constructor(private anneService:AnneService,private router: Router){

      
  }

  ngOnInit(): void {
    this.getAllAnne()
  }
  

  annes: Array<Anne>=[] ;

  selectAnne: Anne | undefined;

  
  
  getAllAnne(){
    this.anneService.getAllAnne().subscribe(
      (value:Array<Anne>)=>{
         this.annes=value;
         
      },
      (error:String)=>{

      },
      ()=>{

      }
    );
  }


  // get current to update
  getSelectedAnne(anne: Anne){
   
    this.selectAnne=anne;
    this.router.navigate(['/admin/anne/update', { anne: JSON.stringify(anne) }])

  }

  //delete 
  deleteAnne(id:number){
    Swal.fire({
      title: 'vous ete sur?',
      text: "Cette  action est ireversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:'Suprimer definitivement anne !' 
    }).then((result) => {
      if(result.isConfirmed){
        this.anneService.deleteAnne(id).subscribe(
          (value:Anne)=>{
            console.log("Anne Supprimer");

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/admin/anne']);
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
