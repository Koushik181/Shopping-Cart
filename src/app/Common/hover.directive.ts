import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[hover]'
})

export class HoverDirective{

    constructor(private el:ElementRef){
       
    }

    @HostListener('mouseover',['$event.target'])
    handleMouseOver(e:any){

        console.log(e);
        
        this.el.nativeElement.style="background-color:red"

    }

    @HostListener('mouseout',['$event.target'])
    handleMouseOut(e:any){

        console.log(e);
        
        this.el.nativeElement.style="background-color:white"

    }
}

//event Bindings in directives, to make it more interactive. by using @HostListener