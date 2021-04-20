import {Component, OnInit} from '@angular/core';
import {Request} from '../../model/Request';
import {RequestService} from '../../service/request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  requestList: Array<Request> = [];

  displayedColumns: string[] = ['id', 'clientName', 'location', 'requestDate', 'requiredDate', 'pickedDate', 'sameDayReturn', 'username'];

  constructor(public requestService: RequestService, private router: Router) {
  }

  ngOnInit(): void {
    this.requestService.getAllRequests().subscribe(list => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
      }
      this.requestList = list;
    }, error => {
      this.router.navigateByUrl('/login');
    });
  }

}
