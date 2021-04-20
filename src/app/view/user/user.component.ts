import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  userList: Array<User> = [];
  idNo = 'Auto generated';
  firstName = '';
  lastName = '';
  nicNo = '';
  userType = '';
  mobileNumber = '';
  username = '';
  password = '';

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'nic', 'mobile', 'userType', 'username'];

  constructor(public userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(list => {
      this.userList = list;
    }, error => {
      this.router.navigateByUrl('/login');
    });
  }

  saveUser(): void {
    // tslint:disable-next-line:max-line-length
    this.userService.saveUser(this.firstName, this.lastName, this.nicNo, this.userType, this.mobileNumber, this.username, this.password).subscribe(user => {
      this.userList.push(user);
    });
  }

}
