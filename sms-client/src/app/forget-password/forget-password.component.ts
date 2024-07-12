import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  frmGrpForgetPassword=new FormGroup({
    email:new FormControl('', [Validators.required,Validators.email]),
  })

  fnSubmit(){
    console.log(this.frmGrpForgetPassword);
  }

  redirect(url:string){
    this.router.navigateByUrl(url);
  }

}
