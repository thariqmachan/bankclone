import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // data="happy banking with us"
  data2="enter email id"

  acno:string=""
  psw:string=""

  constructor(private rout:Router) {

  }
  ngOnInit(): void {
    
  }

  login(){
    // alert("button clicked")
    console.log(this.acno);
    console.log(this.psw);
    this.rout.navigateByUrl("home")
    
    
  }


  pswChange(event:any){
    console.log(event.target.value);
    
  }

}



