import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;

  constructor(
      private hardcodedAuthenticationService: HardcodedAuthenticationService,
      private router: Router
      ) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

    onClickLogout(){
      if( this.hardcodedAuthenticationService.isUserLoggedIn() ){
        this.hardcodedAuthenticationService.logout();
      }
      this.router.navigate(["/login"])
    }

}
