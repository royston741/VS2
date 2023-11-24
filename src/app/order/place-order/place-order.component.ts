import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ShareDataService } from 'src/app/services/shareData.service';
import { Item } from 'src/shared/model/Item';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private shareDataServices: ShareDataService, private orderService: OrderService) { }

  ngOnInit() {
    const data = (this.shareDataServices.getData()) as Item[];
    this.orderService.processOrder({ orderTotal: 0, orderItem: data }).subscribe(response=>{
      console.log(response.responseData)
    })
  }

}
