import { Component } from '@angular/core';
import { User } from '../../../../models/user';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user:User =new User("","");
  constructor(private userService:AuthService,private router:Router) { }


  onSubmit(){
    this.userService.register(this.user).subscribe(
      (data)=>{
      if (data){
        
        Swal.fire({ text: 'Sucess create', icon: 'success'});
        
      }
    },
    (error)=>{
      Swal.fire({ text: 'Login Error ;Try Again', icon: 'error'});
      console.log(error)
    }
    
    )
  }

}
