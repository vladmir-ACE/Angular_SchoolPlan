import { Component, OnInit, ViewChild } from '@angular/core';
import { EnseignantService } from '../../services/enseignant/enseignant.service';
import { Router } from '@angular/router';
import { Enseignant } from '../../../../models/enseignant';
import Swal from 'sweetalert2';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrl: './enseignant.component.css'
})
export class EnseignantComponent implements OnInit {

  constructor(private enseignantService:EnseignantService,private router: Router){

      
  }

  ngOnInit(): void {
    this.getAllEnseignant()
  }
  

  enseignants: Array<Enseignant>=[] ;

  selectEnseignant: Enseignant | undefined;


   

    loading: boolean = true;

    


  clear(table: Table) {
    table.clear();
}



  
  getAllEnseignant(){
    this.enseignantService.getAllEnseignant().subscribe(
      (value:Array<Enseignant>)=>{
         this.enseignants=value;
         this.loading = false;
      },
      (error:String)=>{

      },
      ()=>{

      }
    );
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
