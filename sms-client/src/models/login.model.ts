import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root', // This makes the service available application-wide
})
export class LoginModel{

    email!:string;
    password!:string;

    // constructor(email:string, password:string){
    //     this.email=email;
    //     this.password=password;
    // }

}
  


