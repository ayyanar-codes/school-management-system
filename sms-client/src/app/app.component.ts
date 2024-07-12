import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-with-authentication';

  constructor(private router:Router){

  }

  fnRedirectTo(url:string){
    this.router.navigateByUrl(url);
  }


}
