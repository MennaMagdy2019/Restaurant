import { Injectable } from '@angular/core';
import { Table } from '../models/Table';
import { booking_table } from 'src/menuData';

@Injectable({
  providedIn: 'root'
})
export class BookingTableService {

  constructor() { }
  bookingTable(table:Table){
    // console.log(table)
    // booking_table.push({date:"2023-05-15",email:"menna.88@yahoo.com",first_name:"Menna"
    // ,last_name:" Magdy1",persons:3,phone:"05039033066",time:"03:28"})
    // console.log(booking_table)
    return booking_table.push(table)
  }
}
