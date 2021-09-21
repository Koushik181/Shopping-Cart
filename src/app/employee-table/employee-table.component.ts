import { Component } from "@angular/core";

@Component({
    selector:'app-employee-table',
    templateUrl:'./employee-table.component.html',
    styleUrls:['./employee-table.component.css']
})

export class EmployeeTableComponent{

    employees:Array<any>
    countries:Array<any>
    selectedEmployee:any;
    constructor(){

        this.employees =[{
            name:"Koushik",age:21,salary:900000
        },
        {
            name:"Vinee",age:20,salary:800000
        },
        {
            name:"Sri",age:30,salary:10000000
        }
    ]
    this.countries=[{
        code:"IN",
        name:"India"
    },
    {
        code:"US",
        name:"United States"
    },
    {
        code:"UK",
        name:"United Kingdom"
    }
]
    }

    handleClick(emp:any){
        this.selectedEmployee=emp;
    }

}