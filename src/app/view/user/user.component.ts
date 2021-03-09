import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
  userType = 'ADMIN';
  mobileNumber = '';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    this.userService.saveUser(this.firstName, this.lastName, this.nicNo, this.userType, this.mobileNumber).subscribe(user => {
      this.userList.push(user);
    });
  }

}
