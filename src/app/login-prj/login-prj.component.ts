import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { MinimumAge } from '../Common/AgeValidator';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-prj',
  templateUrl: './login-prj.component.html',
  styleUrls: ['./login-prj.component.css']
})
export class LoginPrjComponent implements OnInit {
  loginForm :FormGroup;
  apiResult:any;
  constructor(private dataservice:DataService) {

    this.loginForm = new FormGroup({

      //default value : koushik if provided as first parameter in new FormControl
      username: new FormControl('',[Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern(/^[a-z0-9]+$/i)
      ])
      ,

      password: new FormControl('',[Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/)
      ]
      )
    })

   }

   handleLogin(){

    //for usernamae console.log(this.loginForm.controls['username'].value)
    // to obtain all the details of username console.log(this.loginForm.controls);

    console.log(this.loginForm.controls['username'].value)
    console.log(this.loginForm.controls['password'].value)
  
      let url = 'http://51.81.71.198:3000/api/members/login'
      let payLoad = {
        "EMAIL": this.loginForm.controls['username'].value,
        "PASSWORD": this.loginForm.controls['password'].value
      }
      console.log(payLoad);
      
      this.dataservice.postApi(url, payLoad).subscribe(result => {
        console.log(result);
        console.log("SUCCESSS");
        
        this.apiResult.success=true;
        this.apiResult.error =false;
        console.log(this.apiResult);
      }, err => {
        console.log("ERRORO");
        
        this.apiResult.success=false;
        this.apiResult.error =true;
        console.log(this.apiResult);
      });
    
    

   }

   get userName(){
     return this.loginForm.controls['username'];
   }

   get passWord(){
    return this.loginForm.controls['password'];
  }


  // for custom validator MinimumAge
 
  ngOnInit(): void {

    this.apiResult={
      success:false,
      error:false
    }

  }

}
