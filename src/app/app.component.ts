import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles:[
    `.modal{background: rgba(0,0,0, .5)}`
  ]
})
export class AppComponent implements OnInit {
  display = "none";
    ngOnInit() {
     }
  openModal() {
      this.display = "block";
    }
    onCloseHandled() {
      this.display = "none";
    }
    constructor(private router: Router) {
    }
    clickButton(path: string) {
      this.router.navigate([path]);
  }
  }

