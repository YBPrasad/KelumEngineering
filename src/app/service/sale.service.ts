import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  orderList:any=[]
  i:number=0;
  constructor() { }

  addItemList(item:any){
    
    this.orderList[this.i]=item;
    this.i++;
    console.log(this.orderList)
  }

  getItemList(){
    return this.orderList;
  }
}
