import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "src/app/services/auth.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  RegisterForms:FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required]),
    rePassword: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/)]),
  })
  submitRegister(data:FormGroup){
    this._AuthService.register(data.value).subscribe({
      next:(response)=>{
        if(response.message==='success')
        {
          this._Router.navigate(['/login'])
        }
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }

}
