import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/Models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor( private formbuilder : FormBuilder,
    private router: Router ) {
   
  }

  ngOnInit(){
    this.loginForm = this.formbuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]] 
      }
    )
  }

  submitLogin() {
    // debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
    console.log(this.loginForm.value);
    this.router.navigate(["/main"]);
  }
}
