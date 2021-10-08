import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Stock } from '../stock.model';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  orderList:any=[]
  i:number=0;
  item:any;
  date:any=new Date();;
  

  dbPath='sale'
  saleRef:AngularFireList<any>;
  constructor(private db:AngularFireDatabase) {
    this.saleRef=db.list(this.dbPath);
   }

  addItemList(item:any){
    
    this.orderList[this.i]=item;
    this.i++;
    console.log(this.orderList)
  }

  getItemList(){
    return this.orderList;
  }

  addNewSale(code:any,name:any,qty:any){
    this.item={
      code:code,
      name:name,
      quantity:qty,
      date:formatDate(this.date, 'yyyy-MM-dd', 'en-US')
    }
    this.date=formatDate(this.date, 'yyyy-MM-dd', 'en-US')
    this.saleRef=this.db.list(this.dbPath+"/"+this.date)
    return this.saleRef.push(this.item);
  }

  getOneItem(date:any){
    this.saleRef=this.db.list(this.dbPath+"/"+date);
    return this.saleRef.valueChanges();
  }
}
