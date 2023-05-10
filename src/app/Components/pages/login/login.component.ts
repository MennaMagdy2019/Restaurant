import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup = new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required])
  })
 //,Validators.pattern(/^[a-z][0-9]{3}$/
  constructor(private _authServive:AuthService , private _router:Router){}

  submitForm(){
   if(this.loginForm.invalid) return;
   this._authServive.login(this.loginForm.value).subscribe((data => {
     if(data.message == 'success')
           this._router.navigateByUrl('/home');
     else{
       alert(data.message)
     }
   }))
  }
}
