import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  @ViewChild('txtUsername')
  txtUsername!: ElementRef;
  @ViewChild('frm')
  frmSignIn!: NgForm;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  authenticate(): void {
    // this.userService.authenticate(this.username, this.password).subscribe(token => {
    //   sessionStorage.setItem('token', token);
    //   sessionStorage.setItem('username', this.username);
    //   this.router.navigateByUrl('/dashboard');
    // }, error => {
    //   this.username = '';
    //   this.password = '';
    //   this.frmSignIn.reset();
    //   (this.txtUsername.nativeElement as HTMLInputElement).focus();
    // });
    this.router.navigateByUrl('/home/dashboard');
  }
}
