import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";



export function MinimumAge(control: AbstractControl): ValidationErrors | null{
    const controlValue = control.value;

    if(isNaN(controlValue) || controlValue<18){

        return {'minage':true,'requiredValue':18};
    }
    return null;
}


//export function MinimumAge(control: AbstractControl): Observable<ValidationErrors> | null{


//return of({'minage':true,'requiredValue':18})