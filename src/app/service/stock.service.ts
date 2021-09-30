import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Stock } from '../stock.model';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private angularFireStore:AngularFirestore,private router:Router) { }

  createItem(item:Stock){
    return new Promise<any>((resolve,reject)=>{
      this.angularFireStore
        .collection("stock")
        .add(item)
        .then(response => { 
          this.router.navigate(['dashboard']);
          console.log(response) },
         error => reject(error));
        
    })
  }
}
