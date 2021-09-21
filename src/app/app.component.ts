import { Component } from '@angular/core';
import {Observable,of,interval}from 'rxjs';
import{map,take} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';

  constructor(){
    this.buildData();
  }

  buildData(){
    const data = interval(1000);

    //below code continuosly takes all values
    //data.subscribe(value=>{
      //console.log(value);
    //})

    //below code uses pipe and take to take only required values
    data.pipe(take(10)).subscribe(value=>{
      console.log("Observer-1",value);
    })
    data.pipe(take(20)).subscribe(value=>{
      console.log("Observer-2",value);
    })
    data.pipe(take(30)).subscribe(value=>{
      console.log("Observer-3",value);
    })

  }
}
