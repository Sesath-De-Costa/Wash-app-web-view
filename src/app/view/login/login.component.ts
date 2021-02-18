import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  username = '';
  password = '';

  constructor() {
  }

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   email: new FormGroup('', [Validators.required, Validators.email]),
    //   password: new FormGroup('', [Validators.required, Validators.minLength(8)])
  }
}
