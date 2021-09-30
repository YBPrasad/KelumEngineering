import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './component/addnew/addnew.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DefaultComponent } from './component/default/default.component';
import { LoginComponent } from './component/login/login.component';
import { StockComponent } from './component/stock/stock.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'',component:DefaultComponent},
    {path:'addnew',component:AddnewComponent},
    {path:'stock',component:StockComponent}

  ]
},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
