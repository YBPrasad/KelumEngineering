import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/service/stock.service';
import { Stock } from 'src/app/stock.model';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  public userForm:FormGroup;
  private date=new Date();
  public showErr:boolean=false;

  constructor(private stockSer:StockService,private router:Router,private formBuilder:FormBuilder) { 
    this.userForm=this.formBuilder.group({
      name:[''],
      code:[''],
      rackNo:[''],
      quantity:[''],
      price:[''],
      date:formatDate(this.date, 'yyyy-MM-dd', 'en-US')
    })
  }

  ngOnInit(): void {
    console.log(this.date);
  }

  onSubmit(){
    if(this.userForm.value.name=="" || this.userForm.value.code=="" || this.userForm.value.rackNo==""
    || this.userForm.value.quantity=="" || this.userForm.value.price==""){
      this.showErr=true;
    }
    else{
      this.stockSer.createStock(this.userForm.value)
      .then(()=>{
        this.router.navigate(['/dashboard/stock']);
  
      })
    }
    
  }


}
