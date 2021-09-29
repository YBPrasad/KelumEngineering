import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';


interface User{
  email:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,User {

  'email':string;
  'password':string;

  constructor(private authSer:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authSer.LogIn(this.email,this.password).then((result)=>{
        this.router.navigate(['/dashboard']);
    }).catch((err)=>{
        window.alert("Invalid Details");
    })
  }

}
