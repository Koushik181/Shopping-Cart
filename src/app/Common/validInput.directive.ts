import { registerLocaleData } from "@angular/common";
import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[validInput]'
  })
export class ValidInputDirective implements OnInit{

    constructor(private el:ElementRef){

    }
    ngOnInit(): void {

    }

    @HostListener('keydown',['$event'])
    handleInput(event:any):any{
        const pattern = this.el.nativeElement.pattern;

        console.log(pattern);

        var reg = new RegExp(pattern);

        if(event.keyCode ==8){
            return true;
        }
        else if(!reg.test(event.key)){
            event.preventDefault();
        }
    }


}