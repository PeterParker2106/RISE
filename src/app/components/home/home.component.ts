import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../ShareData.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productCount!: number;
  Subscription: Subscription = new Subscription;

  constructor(
    private sharedDataService: SharedDataService,

    ) { }

  ngOnInit() {
    this.sharedDataService.currentProductCount.subscribe(count => {
      console.log('Received product count:', count);
      console.log(this.sharedDataService.currentProductCount);
      this.productCount = count;
    });
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}

