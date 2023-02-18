import { Component } from '@angular/core';
import {Login} from "../../models/login";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public login : Login;
  confirmPass: any;
  constructor() {
    this.login=new Login();
  }


  onSubmit(form :any) {
    console.log(this.login);
  }
}
