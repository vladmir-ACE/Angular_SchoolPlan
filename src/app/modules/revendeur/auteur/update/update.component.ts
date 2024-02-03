import { Component, OnInit } from '@angular/core';
import { AuteurService } from '../../../../services/auteur.service';
import { ActivatedRoute } from '@angular/router';
import { Auteur } from '../../../../models/auteur';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  selectAuteur: Auteur =new Auteur("","",0);

  constructor(private auteurService: AuteurService,
    private route: ActivatedRoute){
      
    }

  ngOnInit(): void {
    const auteurData = this.route.snapshot.paramMap.get('auteur');

    if (auteurData) {
        this.selectAuteur = JSON.parse(auteurData);
    }
  }

  onSubmit(){
    let auteur:Auteur=this.selectAuteur;

    console.log(auteur);

    this.auteurService.updateAuteur(auteur,auteur.id!).subscribe(
      (value:Auteur)=>{
        console.log("auteur update success :",value);
        Swal.fire({ text: 'update Sucess!', icon: 'success'});
      },
      error=>{
        console.error("Error while Updating author ",error)
      }
    );
  }
  



}
