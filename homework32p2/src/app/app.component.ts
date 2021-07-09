import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { constants } from 'buffer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  resData: any[];
  nform:number = 0;
  nto:number = 0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'THB';

  title = 'homework32p2';
  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient
  ){
    this.form = this.fb.group(
      {
        nform: ['',Validators.required],
        nto: ['',Validators.required],
        fromCurrency: ['',Validators.required],
        toCurrency: ['',Validators.required],
      }
    );
  }

  convert(){
    this.nto = this.nform*((1/this.resData['rates'][this.fromCurrency])/(1/this.resData['rates'][this.toCurrency]));
  }

  ngOnInit(): void{
    const newPost = this.form.value;
    const access_key = '2f3feda70aae0973341329550f78bf7c';
    this.httpClient.get('http://api.exchangeratesapi.io/v1/latest?access_key='+access_key).subscribe(
      result => {
       // this.form.reset();
        this.resData = result as any[];
      }
    );
  }
}
