import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingTableService } from '../Services/booking-table.service';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss']
})
export class BookingTableComponent {
  bookingForm:FormGroup = new FormGroup({
    'persons':new FormControl(null,[Validators.required]),
    'date':new FormControl(null,[Validators.required]),
    'time':new FormControl(null,[Validators.required]),
    'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'phone':new FormControl(null,[Validators.required]),
    'email':new FormControl(null,[Validators.required,Validators.email]),

  })

  constructor(private _bookingTable:BookingTableService , private _router:Router){}


  submitForm(){
   if(this.bookingForm.invalid) return;
   console.log(this.bookingForm.value)
   this._bookingTable.bookingTable(this.bookingForm.value)
   alert("Thank you for booking")
   this._router.navigateByUrl('/home')

  }
}
