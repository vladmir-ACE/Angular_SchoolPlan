import { Component, OnInit } from '@angular/core';
import { Cours } from '../../../../../models/cours';
import { CoursService } from '../../../services/cours/cours.service';
import { Router } from '@angular/router';
import { Matiere } from '../../../../../models/matiere';
import { Enseignant } from '../../../../../models/enseignant';
import { Anne } from '../../../../../models/anne';
import Swal from 'sweetalert2';
import { MatiereService } from '../../../services/matiere/matiere.service';
import { EnseignantService } from '../../../services/enseignant/enseignant.service';
import { AnneService } from '../../../services/anne/anne.service';

@Component({
  selector: 'app-save-cours',
  templateUrl: './save-cours.component.html',
  styleUrl: './save-cours.component.css'
})
export class SaveCoursComponent implements OnInit {


    matieres:Array<Matiere>=[];
    enseignants:Array<Enseignant>=[];
    annes:Array<Anne>=[];

  cours:Cours =new Cours("",new Matiere("",""),new Enseignant("","","","",""),new Anne("","",""));
  constructor(private coursService:CoursService,private router:Router,private matiereService:MatiereService,
    private enseignantService:EnseignantService, private anneService:AnneService
    ) { }


  ngOnInit(): void {
    
    this.getAllMatiere();
    this.getAllEnseignant();
    this.getAllAnne();


  }
  

  //get Matiere

  getAllMatiere(){
    this.matiereService.getAllMatiere().subscribe(
      (value:Array<Matiere>)=>{
         this.matieres=value;
         
      },
      (error:String)=>{

      },
      ()=>{

      }
    );
  }

  //get ALL Anne 
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

  // get all Enseignant

  getAllEnseignant(){
    this.enseignantService.getAllEnseignant().subscribe(
      (value:Array<Enseignant>)=>{
         this.enseignants=value;
       
      },
      (error:String)=>{

      },
      ()=>{

      }
    );
  }




  
  onSubmit(){

    //console.log(this.cours);

    this.coursService.postCours(this.cours).subscribe(
      (data)=>{
      if (data){
        this.cours=new Cours("",new Matiere("",""),new Enseignant("","","","",""),new Anne("","",""));
        Swal.fire({ text: 'Cours Save Sucess', icon: 'success'});
        
      }
    },
    (error)=>{
      Swal.fire({ text: 'Error Saving ;Try Again', icon: 'error'});
      console.log(error)
    }
    
    )

  }

}
