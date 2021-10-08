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
  listLen:number=0
  oneItem:any;
  date:any;
  searchdate:any;
  searchSaleList:any=[]
  constructor(private saleSer:SaleService,private stockSer:StockService,private router:Router) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.saleList=this.saleSer.getItemList();
    this.listLen=this.saleList.length
  }

 updateStock(){
   this.saleList.forEach((value:any)=>{
    
     
     this.stockSer.updateBySale(value.key,{quantity:value.quantity-1}).then(()=>{
       
     });
     this.saleSer.addNewSale(value.code,value.name,value.quantity).then(()=>{
       console.log("success sale")
     })
     

   })
   this.router.navigate(['/dashboard/stock']);
 }

 exitStock(){
  this.saleList=[]
  this.router.navigate(['/dashboard/stock']);

 }

 getItem(){
   this.saleSer.getOneItem(this.searchdate).subscribe((value:any)=>{
     this.searchSaleList=value;
    console.log(this.searchSaleList);
   })
 }



}
