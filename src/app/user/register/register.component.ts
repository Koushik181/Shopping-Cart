import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm:FormGroup;
  userProfile:any;
  countryList:Array<any>;
  apiResult:any;
  countryDropdownSchema:any;
  constructor(private dataservice:DataService) {
    this.loginForm= new FormGroup({
      email: new FormControl('',[Validators.required,
      Validators.minLength(6),
    Validators.email]),
    password: new FormControl('',[Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/),
     
    ]
    ),
    gender : new FormControl('',[Validators.required])
     
      });
      this.userProfile={
      email:'',
      password:'',
      phone:'',
      country:'',
      gender:'M'
      }

    this.countryList=this.dataservice.getCountryList();
   }
  ngOnInit(): void {
    this.dataservice.getDataFromApi('https://restcountries.eu/rest/v2/all')
    .subscribe((result:any)=>{
      this.countryList = result.map((item:any)=>{
        return {name:item.name,key:item.alpha3Code};
      });
      console.log(this.countryList)
      this.countryDropdownSchema = {
        labelName:"Country",
        selectedValue:"USA",
        controlName:"country",
        options:this.countryList,
        defaultLabel:"Select Country"
      }

    },err=>{
      console.log(err);
    });

    this.apiResult={
      success:false,
      error:false
    }
  }


   get Email(){
    return this.loginForm.controls['email'];
  }

  get passWord(){
   return this.loginForm.controls['password'];
 }

 countrySelected(data:any){
   this.userProfile.country=data;
 }

 handleRegister() {
  let url = 'http://51.81.71.198:3000/api/members/register'
  let payLoad = {
    "EMAIL": this.userProfile.email,
    "MOBILE_NUMBER": this.userProfile.phone,
    "PASSWORD": this.userProfile.password
  }
  this.dataservice.postApi(url, payLoad).subscribe(result => {
    console.log(result);
    this.apiResult.success=true;
    this.apiResult.error =false;
  }, err => {
    this.apiResult.success=false;
    this.apiResult.error =true;
  })

}


}
