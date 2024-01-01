import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public productCountSource = new BehaviorSubject<number>(0);
  currentProductCount = this.productCountSource.asObservable();

  constructor() { }

  updateProductCount(count: number) {
    console.log('SharedService: updateProductCount called with value:', count);
    this.productCountSource.next(count);
    console.log('SharedService: productCountSource value:', this.productCountSource.value);
  }
}
