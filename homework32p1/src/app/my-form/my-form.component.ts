import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  form: FormGroup;
  title = 'homework32p1';
  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group(
    {
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      postalAddress: ['',Validators.required],
      comment: ['']
    }
    );
  }

  ngOnInit(): void{

  }

  submitForm(){
    alert(JSON.stringify(this.form.value));
  }
}
