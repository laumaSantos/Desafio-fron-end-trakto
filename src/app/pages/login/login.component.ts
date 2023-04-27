import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/Models/LoginModel';
import { AutenticaService } from 'src/service/autentica.service';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor( private formbuilder : FormBuilder,
    private router: Router, public loginService: LoginService,
    private autenticaService : AutenticaService) {
   
  }

  ngOnInit(){
    this.loginForm = this.formbuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]] 
      }
    )
  }

  submitLogin() {
    // debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
    console.log(this.loginForm.value);
    this.loginService.LoginUser(dadosLogin)
    .subscribe(
      token =>
      {
        var mytoken = token.access_token

        this.autenticaService.DefineToken(mytoken)

        this.router.navigate(["/main"]);
      },
      erro => {

      })
    
  }
}
