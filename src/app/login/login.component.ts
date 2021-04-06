import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Data } from '@angular/router';
import {AuthService} from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isSuccess:boolean;
  username:string;
  password:string;
  errorMessage:string;
  constructor(private authService: AuthService, private route:Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
  }
  
  onLogin(){
    console.log(this.username + this.password);
    this.isSuccess = this.authService.login(this.username, this.password);
    if(this.isSuccess){
       this.route.navigate(['/recipes']);
    }
    else{
      this.isSuccess=false;
      this.errorMessage="Login not successful.Try again with valid username/Password";
    }
  }
}
