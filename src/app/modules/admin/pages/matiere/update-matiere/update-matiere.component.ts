import { Component, OnInit } from '@angular/core';
import { Matiere } from '../../../../../models/matiere';
import { MatiereService } from '../../../services/matiere/matiere.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-matiere',
  templateUrl: './update-matiere.component.html',
  styleUrl: './update-matiere.component.css'
})
export class UpdateMatiereComponent implements  OnInit {
  
  matiere: Matiere =new Matiere("","");

  constructor(private matiereService: MatiereService,
    private route: ActivatedRoute,private router:Router){
      
    }

  ngOnInit(): void {
    const matiereData = this.route.snapshot.paramMap.get('matiere');

    if (matiereData) {
        this.matiere = JSON.parse(matiereData);
    }
  }

  onSubmit(){
    let matiere:Matiere=this.matiere;

    console.log(matiere);

    this.matiereService.updateMatiere(matiere).subscribe(
      (value:Matiere)=>{
        console.log("matiere update success :",value);
        Swal.fire({ text: 'update Sucess!', icon: 'success'});
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/admin/matiere']);
      },
      error=>{
        console.error("Error while Updating author ",error)
      }
    );
  }

}
