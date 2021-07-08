import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyFormComponent } from './my-form/my-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,      //สำหรับสร้าง Form
    ReactiveFormsModule,  //สำหรับสร้าง Form
    HttpClientModule    //สำหรับสร้าง Http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
