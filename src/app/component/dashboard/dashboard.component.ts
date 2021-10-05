import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  url:any;
  public date=formatDate(new Date(),'yyyy-MM-dd', 'en-US');
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('username');
    console.log(this.user);
    if(this.user==null){
      this.router.navigate(['']);
    }

    this.url=this.router.url;
    console.log(this.url)
  }

  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }

  

}
