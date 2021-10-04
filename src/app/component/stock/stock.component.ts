import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {map} from 'rxjs/operators'
import { SaleService } from 'src/app/service/sale.service';
import { StockService } from 'src/app/service/stock.service';
import { Stock } from 'src/app/stock.model';


export interface UserElement {
  name: string;
  position: number;
  email: string;
}

const ELEMENT_DATA: UserElement[] = [
  { position: 1, name: 'John', email: "john@gmail.com" },
  { position: 2, name: 'Herry', email: "herry@gmail.com" },
  { position: 3, name: 'Ann', email: "ann@gmail.com" },
  { position: 4, name: 'Johnny', email: 'johnny@gmail.com' },
  { position: 5, name: 'Roy', email: "roy@gmail.com" },
  { position: 6, name: 'Kia', email: "kia@gmail.com "},
  { position: 7, name: 'Merry', email: "merry@gmail.com "},

  
];


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit{

  Items:any=[];
  searchTxt:string="";
  Qty:number=10;
  item:any;
  displayedColumns: string[] = ['No','key', 'name', 'rackNo','quantity','price'];
  dataSource:any=null;

  constructor(private stockSer:StockService,private sale:SaleService){}

  ngOnInit(): void {
   this.getAll()
  }

  getAll(){
    this.stockSer.getAllStock().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>({
          key:c.payload.key,
          ...c.payload.val()
        }))
      )
    ).subscribe((data)=>{
      this.Items=data
      this.dataSource=this.Items;
      console.log(this.Items)
    })
  }

  increase(){
    this.Qty++;
  }

  addItem(key:any,code:any,name:any,quantity:any){
    this.item={
      key:key,
      code:code,
      name:name,
      quantity:quantity
    }
    this.sale.addItemList(this.item);

  }
  
}




