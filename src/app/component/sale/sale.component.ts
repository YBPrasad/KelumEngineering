import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/service/sale.service';
import { StockService } from 'src/app/service/stock.service';
import {map} from 'rxjs/operators'
import { Stock } from 'src/app/stock.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  saleList:any=[]
  i:number=1;
  item:any=[];
  cQty:any;
  constructor(private sale:SaleService,private stockSer:StockService,private router:Router) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.saleList=this.sale.getItemList();
    console.log(this.saleList.length);
  }

 updateStock(){
   this.saleList.forEach((value:any)=>{
     
     this.stockSer.updateBySale(value.key,{quantity:value.quantity-1}).then(()=>{
       
     });
   })
 }

}
