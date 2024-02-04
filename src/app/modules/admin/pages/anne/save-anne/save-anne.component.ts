import { Component } from '@angular/core';
import { Anne } from '../../../../../models/anne';
import { AnneService } from '../../../services/anne/anne.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-save-anne',
  templateUrl: './save-anne.component.html',
  styleUrl: './save-anne.component.css'
})
export class SaveAnneComponent {

  anne:Anne =new Anne("","","");
  constructor(private anneService:AnneService,private router:Router, private datePipe:DatePipe) { }


  onSubmit(){

    const formattedDateDebut = this.datePipe.transform(this.anne.date_debut, 'yyyy-MM-dd');
    const formattedDateFin = this.datePipe.transform(this.anne.date_fin, 'yyyy-MM-dd');

    // Utiliser les dates formatées dans votre modèle
    this.anne.date_debut = formattedDateDebut ||"";
    this.anne.date_fin = formattedDateFin ||"";


    this.anneService.postAnne(this.anne).subscribe(
      (data)=>{
      if (data){
        this.anne=new Anne("","","");
        Swal.fire({ text: 'Anne Save Sucess', icon: 'success'});
        
      }
    },
    (error)=>{
      Swal.fire({ text: 'Login Error ;Try Again', icon: 'error'});
      console.log(error)
    }
    
    )
  }


}
