import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators'
import { SaleService } from 'src/app/service/sale.service';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private stockSer:StockService,private saleSer:SaleService) { }

  ngOnInit(): void {
    this.getAll()
    this.getAllSales()
  }

  public len:number=0;
  public saleLen:number=0;
  public cusLen:number=0;
  public orderLen:number=0;

  getAll(){
    this.stockSer.getAllStock().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>({
          key:c.payload.key,
          ...c.payload.val()
        }))
      )
    ).subscribe((data)=>{
      this.len=data.length;
    })
  }

  getAllSales(){
    this.saleSer.getAll().subscribe((value:any)=>{
      this.saleLen=value.length;

    })
  }

}
