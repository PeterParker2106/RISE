import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData = 'assets/'

  constructor(private http: HttpClient) { }

  getInfo() {

  return this.http.get(this.productData, {responseType:'text'});
  }
}

