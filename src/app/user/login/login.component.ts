import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { MinimumAge } from '../../Common/AgeValidator';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//use pipe operator | in html to convert normal words to uppercase or lowercase
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
      ),

      age : new FormControl('',[MinimumAge])
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
  get Age(){
    return this.loginForm.controls['age'];
  }
 
  ngOnInit(): void {

    this.apiResult={
      success:false,
      error:false
    }

  }

}
