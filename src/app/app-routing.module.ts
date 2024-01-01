import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/About/About.component';
import { Product_listComponent } from './components/product_list/product_list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "RISE" },
  { path: 'product_list', component: Product_listComponent, title: "RISE - Product" },
  { path: 'About', component: AboutComponent, title: "RISE - About" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
