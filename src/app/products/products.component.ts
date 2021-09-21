import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  p:any;
  products:any;
  constructor(private dataservice:DataService) { 
    
  }

  ngOnInit(): void {

    if(this.dataservice.getProducts().length == 0){
    this.dataservice.getDataFromApi('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
    .subscribe((result:any)=>{
      this.products = result.map((x:any)=>{
        return {...x,quantity:0};
      });
      console.log('+1');
      this.dataservice.setProducts(this.products);
      
    },err=>{
      console.log(err);
    });
    }else{
      this.products = this.dataservice.getProducts();
    }

  }

  handleProducts(product:any,val:any){
    this.dataservice.modifyCartItems(product,val);
  }
}
