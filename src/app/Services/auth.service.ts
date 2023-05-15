import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null) // to enable subscribe on it
  saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
    let decodedToken:any = jwtDecode(encodedToken)
    this.userData.next(decodedToken);
    console.log(this.userData)
  }

  logout(){
    localStorage.removeItem('userToken')
    this.userData.next(null)
   this._router.navigateByUrl('/login')
  }
  constructor(private http:HttpClient , private _router : Router) {
    if(localStorage.getItem('userToken')){
      this.saveUserData()
    }
  }
  register(registerData:any):Observable<any>{
      return this.http.post('https://sticky-note-fe.vercel.app/signup',registerData)
  }
  login(loginData:any):Observable<any>{
    return this.http.post('https://sticky-note-fe.vercel.app/signin',loginData)
  }
}
