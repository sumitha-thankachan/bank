import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data="Your perfect banking partner"
  Pdata="Enter account number"

  uname:any
  psw:any
 
  constructor(private ds:DataService){}
  ngOnInit(): void {
    
  }
  login()
  {
   // console.log(this.uname);
    //alert(this.uname)
    alert(this.ds.sData)

   
    
  }
  // unameChange(event:any){
  //   console.log(event.target.value);
    
  // }

}
