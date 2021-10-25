import { Component, OnInit } from "@angular/core";
import { Apiauthservice } from "../services/apiauth.service";

@Component({templateUrl:'login.Component.html'})
export class LoginComponent  implements OnInit {
    public  email: string;
    public  password: string;
    constructor(public apiauth:Apiauthservice){

    }

    ngOnInit() {


    }
    login() {

    }
}