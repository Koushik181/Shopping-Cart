import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { RegistrationformComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './user/login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lowercase2 } from './Common/lowercase2.pipe';
import { Phoneformatter } from './Common/phone.formatter.pipe';
import { DataService } from './services/data.service';
import { NumbersOnlyDirective } from './Common/numbersonly.directive';
import { ValidInputDirective } from './Common/validInput.directive';
import { UserModule } from './user/user.module';
import { LoginPrjComponent } from './login-prj/login-prj.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    NavitemsComponent,
    EmployeeTableComponent,
    RegistrationformComponent,
    ProductsComponent,
   // RegisterComponent,
   // LoginComponent,
   // DropdownComponent,
    CartComponent,
    Lowercase2,
    Phoneformatter,
   // NumbersOnlyDirective,
    ValidInputDirective,
   LoginPrjComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:"products",component:ProductsComponent
      },
      {
        path:"login",component:LoginComponent
      },
      {
        path:"register",component:RegisterComponent
      },
      {
        path:"cart",component:CartComponent
      },
      {
        path:"loginprj",component:LoginPrjComponent
      },
      {
        path:"",component:LoginComponent
      }

    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
