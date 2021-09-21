import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:any;
  cartTotal:any;
  constructor(public dataservice:DataService) {
      this.cartProducts= this.dataservice.getCart();
      this.cartTotal = this.dataservice.getCartTotal();
   }
   handleProducts(product:any,val:any){
    this.dataservice.modifyCartItems(product,val);
  }
  ngOnInit(): void {
  }

}
