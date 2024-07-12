import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/models/login.model';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private loginService:LoginService) { }

  frmGrpLogin=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required,Validators.minLength(6)])
  })

  ngOnInit(): void {
  }

  fnSubmit(){


    let newUser:LoginModel=new LoginModel();
    newUser.email=this.frmGrpLogin.controls['email'].value;
    newUser.password=this.frmGrpLogin.controls['password'].value;

    this.loginService.addUser(newUser).subscribe((res)=>{
      let data='';
    });

    console.log(newUser);
  }

  fnCancel(){

  }

  redirect(url:string){
    this.router.navigateByUrl(url);
  }

}
