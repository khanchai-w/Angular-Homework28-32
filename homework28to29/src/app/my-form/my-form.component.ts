import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  form: FormGroup;  //สร้าง formgroup

  constructor(
    private fb: FormBuilder  //สร้าง form builder
  ) {
    this.form = this.fb.group(    //สร้าง Form
      {
        phoneNo: [''],
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        confirmPassword: ['',Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }

  submitForm(){
    alert(JSON.stringify(this.form.value));
  }

}
