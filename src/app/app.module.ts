import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DefaultComponent } from './component/default/default.component';
import { AddnewComponent } from './component/addnew/addnew.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { StockComponent } from './component/stock/stock.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DefaultComponent,
    AddnewComponent,
    StockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    BrowserAnimationsModule,
    // NgMaterialModule,
    MatTableModule,
    MatPaginatorModule,
    AngularFireDatabaseModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
