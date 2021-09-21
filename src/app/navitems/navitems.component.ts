import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
    selector:'app-navitems',
    templateUrl:'./navitems.component.html',
    styleUrls:['./navitems.component.css']
})

export class NavitemsComponent implements OnInit{

    navitems:Array<any>;
    currentDate:any;
    price=1000;
    phone=1234567890;
    countryList:any;
    country:any;
    constructor(private dataservice:DataService){
        this.country='';
        this.countryList = this.dataservice.getCountryList();
        this.currentDate = new Date();
        this.navitems=[

            {
                text:'Login',
                link:'login'
            },
            {
                text:'Products',
                link:'products'
            },
            {
                text:'Register',
                link:'register'
            },
            {
                text:'Cart',
                link:'cart'
            },
            {
                text:'Loginprj',
                link:'loginprj'
            }
        ]
    }

    cartCount=0;
    ngOnInit():void{
        this.dataservice.handleIncrement().subscribe(value=>{
           this.cartCount+=value;
        });
    }
}