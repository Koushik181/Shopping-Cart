import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomCommonModule } from "../Common/common.module";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


@NgModule({

    imports:[FormsModule,ReactiveFormsModule,CustomCommonModule],
    exports:[],
    providers:[],
    declarations:[LoginComponent,RegisterComponent,DropdownComponent]

})

export class UserModule{}
