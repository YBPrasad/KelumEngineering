import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Stock } from '../stock.model';
import  {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class StockService {


  dbPath='stock';
  stockRef:AngularFireList<Stock>;
  stockRefOne:AngularFireList<Stock>;

  constructor(private db:AngularFireDatabase,private router:Router) {
    this.stockRef=db.list(this.dbPath);
    this.stockRefOne=db.list(this.dbPath);
  }

  createStock(item:Stock){
    return this.stockRef.push(item);
  }
  getAllStock():AngularFireList<Stock>{
    return this.stockRef;
  }

  updateBySale(key:any,value:any){
    return this.stockRef.update(key,value);
  }

  getOneItem(key:any){
    this.stockRefOne=this.db.list(this.dbPath+'/'+key);
    return this.stockRefOne.valueChanges();
  }

  removeItem(key:any){
    return this.stockRef.remove(key);
  }


  
}
