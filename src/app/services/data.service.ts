import { HttpClient } from "@angular/common/http";
import { analyzeAndValidateNgModules, ConditionalExpr } from "@angular/compiler";
import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService {

    private cartPord:any;
    private countryList:any;
    private products:any;
    private p:any;

    incrementCart:Subject<any>;
    
    constructor(private http:HttpClient){

      this.products=[];

        this.countryList=[{name:"India",code:"IN"},{name:"United States",code:"US"}];
       
        this.incrementCart =  new Subject<any>();
          //this.products=p.map((x:any)=>{
            //return {...x,quantity:0}; 
        //});
    }

    setProducts(productList:any){
      this.products=productList;
    }

    postApi(url:string,payload:any){
      return this.http.post(url,payload);
    }
    getDataFromApi(url:string){
      return this.http.get(url);
    }

    getCountryList(){
        return this.countryList;
    }

    getProducts(){

        return this.products;
        
    }

    modifyCartItems(product:any,val:any){
        if(val==1){
          console.log("add");
            this.products[product.id-1].quantity++;
            this.incrementCart.next(1);
        }
        else{
          console.log("sub");
            if( this.products[product.id-1].quantity>0){
            this.products[product.id-1].quantity--;}
            this.incrementCart.next(-1);
        }
    }

    handleIncrement(){
      return this.incrementCart.asObservable();
    }

    getCart(){
       return this.products.filter((p:any)=>p.quantity>0);
    }

    getCartTotal(){
        let tot=0;
        this.products.forEach((i:any) => {
            tot+=i.quantity*i.price;
        });
        return tot;
    }
}