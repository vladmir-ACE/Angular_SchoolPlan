import { Component, OnInit } from '@angular/core';
import { Planing } from '../../../../../models/planing';
import { PlaningService } from '../../../services/planing/planing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from '../../../services/classe/classe.service';
import { Cours } from '../../../../../models/cours';
import { Classe } from '../../../../../models/classe';
import { CoursService } from '../../../services/cours/cours.service';
import Swal from 'sweetalert2';
import { Matiere } from '../../../../../models/matiere';
import { Enseignant } from '../../../../../models/enseignant';
import { Anne } from '../../../../../models/anne';

@Component({
  selector: 'app-update-planing',
  templateUrl: './update-planing.component.html',
  styleUrl: './update-planing.component.css'
})
export class UpdatePlaningComponent implements OnInit {
  courss:Array<Cours>=[];
  classes:Array<Classe>=[];
  

planing:Planing =new Planing("","",new Cours("",new Matiere("",""),new Enseignant("","","","",""),new Anne("","","")),new Classe("",""));


constructor(private planingService: PlaningService,
  private route: ActivatedRoute,private router:Router,private classeService:ClasseService,
  private coursService:CoursService){
    
  }

ngOnInit(): void {
  const planingData = this.route.snapshot.paramMap.get('planing');

  if (planingData) {
      this.planing = JSON.parse(planingData);
  }
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


// get all Enseignant



onSubmit(){
  let planing:Planing=this.planing;

  console.log(planing);

  this.planingService.updatePlaning(planing).subscribe(
    (value:Planing)=>{
      console.log("planing update success :",value);
      Swal.fire({ text: 'update Sucess!', icon: 'success'});
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/admin/planing']);
    },
    error=>{
      console.error("Error when Updating Planing ",error)
    }
  );
}

}
