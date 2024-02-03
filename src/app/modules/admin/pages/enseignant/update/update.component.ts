import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../../../../../models/enseignant';
import { EnseignantService } from '../../../services/enseignant/enseignant.service';
import { ActivatedRoute ,Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  enseignant: Enseignant =new Enseignant("","","","","");

  constructor(private enseignantService: EnseignantService,
    private route: ActivatedRoute,private router:Router){
      
    }

  ngOnInit(): void {
    const enseignantData = this.route.snapshot.paramMap.get('enseignant');

    if (enseignantData) {
        this.enseignant = JSON.parse(enseignantData);
    }
  }

  onSubmit(){
    let enseignant:Enseignant=this.enseignant;

    console.log(enseignant);

    this.enseignantService.updateEnseignant(enseignant).subscribe(
      (value:Enseignant)=>{
        console.log("enseignant update success :",value);
        Swal.fire({ text: 'update Sucess!', icon: 'success'});
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/admin/enseignant']);
      },
      error=>{
        console.error("Error while Updating author ",error)
      }
    );
  }
  

}
