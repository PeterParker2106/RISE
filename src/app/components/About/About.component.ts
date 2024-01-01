import { Component, OnInit} from '@angular/core';
import { SharedDataService } from '../../ShareData.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit{
  productCount!: number;
  subscription: Subscription = new Subscription;

  constructor(
    private sharedDataService: SharedDataService,
  ) { }

  ngOnInit() {
    this.subscription = this.sharedDataService.currentProductCount.subscribe(count => {
      console.log('Received product count:', count); // This should log the updated value
      this.productCount = count;
    });
  }
  ngOnDestroy() {
    console.log('AboutComponent destroyed');
    this.subscription.unsubscribe();
  }
}
