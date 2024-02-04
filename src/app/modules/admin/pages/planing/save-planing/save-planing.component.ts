import { Component } from '@angular/core';
import { Cours } from '../../../../../models/cours';
import { Classe } from '../../../../../models/classe';
import { Planing } from '../../../../../models/planing';
import { PlaningService } from '../../../services/planing/planing.service';
import { Router } from '@angular/router';
import { ClasseService } from '../../../services/classe/classe.service';
import { CoursService } from '../../../services/cours/cours.service';
import Swal from 'sweetalert2';
import { Matiere } from '../../../../../models/matiere';
import { Enseignant } from '../../../../../models/enseignant';
import { Anne } from '../../../../../models/anne';

@Component({
  selector: 'app-save-planing',
  templateUrl: './save-planing.component.html',
  styleUrl: './save-planing.component.css'
})
export class SavePlaningComponent {

    courss:Array<Cours>=[];
    classes:Array<Classe>=[];
    

  planing:Planing =new Planing("","",new Cours("",new Matiere("",""),new Enseignant("","","","",""),new Anne("","","")),new Classe("",""));
  constructor(private planingService:PlaningService,private router:Router,private classeService:ClasseService,
    private coursService:CoursService
    ) { }


  ngOnInit(): void {
    
    this.getAllClasse();
    this.getAllCours();



  }
  

  //get Matiere

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
  // get all Enseignant

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





  
  onSubmit(){

    //console.log(this.planing);

    this.planingService.postPlaning(this.planing).subscribe(
      (data)=>{
      if (data){
        this.planing=new Planing("","",new Cours("",new Matiere("",""),new Enseignant("","","","",""),new Anne("","","")),new Classe("",""));
        Swal.fire({ text: 'Planing Save Sucess', icon: 'success'});
        
      }
    },
    (error)=>{
      Swal.fire({ text: 'Error Saving ;Try Again', icon: 'error'});
      console.log(error)
    }
    
    )

  }

}
