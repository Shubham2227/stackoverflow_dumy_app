import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  on_submit_login_check(){
    var user_name=(<HTMLInputElement>document.getElementById("username")).value;
    var user_password=(<HTMLInputElement>document.getElementById("password")).value;
    if(user_name=="admin" && user_password=="admin123"){
      Swal.fire("Hi!","<b>Welcome Back!</b>","success");
      this.router.navigateByUrl('/home');
    }
    else{
      Swal.fire("Oops","<b>Credentials Invalid!</b>","warning");
    }
  }

}
