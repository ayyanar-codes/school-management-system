import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  frmGrpLogin=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required,Validators.minLength(6)])
  })

  ngOnInit(): void {

  }

  fnSubmit(){
    console.log(this.frmGrpLogin);
  }

  fnCancel(){

  }

  redirect(url:string){
    this.router.navigateByUrl(url);
  }
}
