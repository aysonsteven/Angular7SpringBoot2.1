import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Http, Headers, RequestOptions} from "@angular/http";
import {error} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService implements OnInit{
    url:string = "";
  constructor( private http: HttpClient ) { }

  ngOnInit(){

  }

    authenticate(username, password) {
      if(username==="aysonsteven" && password === 'dummy') {
        sessionStorage.setItem('authenticaterUser', username);
        return true;
      }
      return false;
    }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticaterUser')
      return !(user === null)
    }

    logout(){
      sessionStorage.removeItem('authenticaterUser')
    }


}
