import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<ejs-grid [datasource]="data"></ejs-grid>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-grid-app';
  public data: object[]=[
    {
      ProdID:1,
      ProductName:"AAA",
      Price:"$123",
      Production:"China",
      Manufacturer:"CCC Ltd",
      Discount:"20%"
    },
    {
      ProdID:2,
      ProductName:"ABA",
      Price:"$103",
      Production:"Japan",
      Manufacturer:"CCD Ltd",
      Discount:"10%"
    },
    {
      ProdID:3,
      ProductName:"CBA",
      Price:"$1203",
      Production:"China",
      Manufacturer:"CCX Ltd",
      Discount:"15%"
    }
  ]
  }
