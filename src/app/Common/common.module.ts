import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HoverDirective } from "./hover.directive";
import { NumbersOnlyDirective } from "./numbersonly.directive";


@NgModule({
    imports:[FormsModule,
    ReactiveFormsModule],
    exports:[HoverDirective,NumbersOnlyDirective],
    declarations:[HoverDirective,NumbersOnlyDirective],
    providers:[]
})

export class CustomCommonModule{}