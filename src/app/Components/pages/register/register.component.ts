import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
   registerForm:FormGroup = new FormGroup({
     'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
     'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    // 'phone':new FormControl(null,[Validators.required]),
     'email':new FormControl(null,[Validators.required,Validators.email]),
     'age':new FormControl(null,[Validators.required,Validators.min(10),Validators.max(60)]),
     'password':new FormControl(null,[Validators.required])

   })

   constructor(private _authServive:AuthService , private _router:Router){}

   submitForm(){
    if(this.registerForm.invalid) return;
    // console.log(this.registerForm.value)
    this._authServive.register(this.registerForm.value).subscribe((data => {
      if(data.message == 'success')
            this._router.navigateByUrl('/login');
      else{
        alert(data.message)
      }
    }))
   }
}
