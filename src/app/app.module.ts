// core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// rauting and root component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// material
import { MaterialModule } from './material/material.module';

//  compoents
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

// shared
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MsgConfirmComponent } from './shared/msg-confirm/msg-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    FormEmployeeComponent,
    ListEmployeeComponent,
    NavbarComponent,
    MsgConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
