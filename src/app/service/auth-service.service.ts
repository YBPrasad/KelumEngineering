import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public afAuth:AngularFireAuth) { 
    
  }


  SignUp(email:any,password:any){
    return this.afAuth.createUserWithEmailAndPassword(email,password)
    .then((result)=>{
      window.alert("You have been successfully registered");
      console.log(result.user);
    }).catch((err)=>{
      window.alert(err.message);
    });
  }

  LogIn(email:any,password:any){
    return this.afAuth.signInWithEmailAndPassword(email,password)
    .then((result)=>{
        
    })
    .catch((err)=>{
      console.log("error");
      throw err;
    })
  }
}
