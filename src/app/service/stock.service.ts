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
  constructor(private db:AngularFireDatabase,private router:Router) {
    this.stockRef=db.list(this.dbPath);
  }

  createStock(item:Stock){
    return this.stockRef.push(item);
  }
  getAllStock():AngularFireList<Stock>{
    return this.stockRef;
  }

  
}
