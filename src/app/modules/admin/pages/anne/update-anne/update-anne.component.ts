import { Component } from '@angular/core';
import { Anne } from '../../../../../models/anne';
import { AnneService } from '../../../services/anne/anne.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-anne',
  templateUrl: './update-anne.component.html',
  styleUrl: './update-anne.component.css'
})
export class UpdateAnneComponent {

  anne: Anne =new Anne("","","");
  constructor(private anneService: AnneService,
    private route: ActivatedRoute,private router:Router){
      
    }

  ngOnInit(): void {
    const anneData = this.route.snapshot.paramMap.get('anne');

    if (anneData) {
        this.anne = JSON.parse(anneData);
    }
  }

  onSubmit(){
    let anne:Anne=this.anne;

    console.log(anne);

    this.anneService.updateAnne(anne).subscribe(
      (value:Anne)=>{
        console.log("anne update success :",value);
        Swal.fire({ text: 'update Sucess!', icon: 'success'});
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/admin/anne']);
      },
      error=>{
        console.error("Error while Updating author ",error)
      }
    );
  }

}
