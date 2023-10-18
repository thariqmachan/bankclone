import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // data="happy banking with us"
  data2="enter email id"

  constructor() {

  }
  ngOnInit(): void {
    
  }

  login(){
    alert("button clicked")
  }

  
  pswChange(event:any){
    console.log(event.target.value);
    
  }

}



