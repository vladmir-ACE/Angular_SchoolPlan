import { Component } from '@angular/core';
import { User } from '../../../../models/user';
import { AuthService } from '../../service/auth.service';
import { error } from 'console';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:User =new User("","");
  constructor(private userService:AuthService,private router:Router) { }


  onSubmit(){
    this.userService.login(this.user).subscribe(
      (data)=>{
      if (data){
        this.redirect(data.roles!);

        
      }
    },
    (error)=>{
      Swal.fire({ text: 'Login Error ;Try Again', icon: 'error'});
      console.log(error)
    }
    
    )
  }

  redirect(role:string){

    this.router.navigate(["/"+role]);
      
   
  }


}
