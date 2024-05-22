import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "src/app/services/auth.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  LoginForms:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required]),
  })
  UserToken:any = []
  submitLogin(data:FormGroup){
    this._AuthService.login(data.value).subscribe({
      next:(response)=>{
        console.log(response);
        
        if(response.message==='success')
        {
          localStorage.setItem ('UserToken',response.token);
          this._Router.navigate(['/home'])
        }
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }

}
