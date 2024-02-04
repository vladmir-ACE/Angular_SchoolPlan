import { Component, OnInit } from '@angular/core';
import { CoursService } from '../../../services/cours/cours.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cours } from '../../../../../models/cours';
import { Matiere } from '../../../../../models/matiere';
import { Enseignant } from '../../../../../models/enseignant';
import { Anne } from '../../../../../models/anne';
import { MatiereService } from '../../../services/matiere/matiere.service';
import { EnseignantService } from '../../../services/enseignant/enseignant.service';
import { AnneService } from '../../../services/anne/anne.service';

@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrl: './update-cours.component.css'
})
export class UpdateCoursComponent implements OnInit {


  matieres:Array<Matiere>=[];
    enseignants:Array<Enseignant>=[];
    annes:Array<Anne>=[];

  cours: Cours =new Cours("",new Matiere("",""),new Enseignant("","","","",""),new Anne("","",""));

  constructor(private coursService: CoursService,
    private route: ActivatedRoute,private router:Router,private matiereService:MatiereService,
    private enseignantService:EnseignantService, private anneService:AnneService){
      
    }

  ngOnInit(): void {
    const coursData = this.route.snapshot.paramMap.get('cours');

    if (coursData) {
        this.cours = JSON.parse(coursData);
    }
    this.getAllAnne();
    this.getAllMatiere();
    this.getAllEnseignant();
    
  }

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
    let cours:Cours=this.cours;

    console.log(cours);

    this.coursService.updateCours(cours).subscribe(
      (value:Cours)=>{
        console.log("cours update success :",value);
        Swal.fire({ text: 'update Sucess!', icon: 'success'});
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/admin/cours']);
      },
      error=>{
        console.error("Error when Updating Cours ",error)
      }
    );
  }
}
