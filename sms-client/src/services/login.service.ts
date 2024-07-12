import { Observable } from "rxjs";
import { LoginModel } from "src/models/login.model";
import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root', // This makes the service available application-wide
})
export class LoginService{

    constructor(private http:HttpClient){}

    addUser(user: LoginModel){
        return this.http.post<LoginModel>('http://localhost:5000/landing/signup', user);
    }

}