import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from '../../../../../models/classe';
import { ClasseService } from '../../../services/classe/classe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrl: './update-classe.component.css'
})
export class UpdateClasseComponent {
  classe: Classe =new Classe("","");

 constructor(private classeService: ClasseService, private route: ActivatedRoute,private router:Router){
      
  }

ngOnInit(): void {
  const classeData = this.route.snapshot.paramMap.get('classe');

  if (classeData) {
      this.classe = JSON.parse(classeData);
  }
}

onSubmit(){
  let classe:Classe=this.classe;

  console.log(classe);

  this.classeService.updateClasse(classe).subscribe(
    (value:Classe)=>{
      console.log("classe update success :",value);
      Swal.fire({ text: 'update Sucess!', icon: 'success'});
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/admin/classe']);
    },
    error=>{
      console.error("Error while Updating author ",error)
    }
  );
}

}
