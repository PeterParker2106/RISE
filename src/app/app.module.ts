import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product_listComponent } from './components/product_list/product_list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/About/About.component';

import { HttpClientModule } from '@angular/common/http';
import { SharedDataService } from './ShareData.service';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    Product_listComponent,
    HomeComponent,
    AboutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
