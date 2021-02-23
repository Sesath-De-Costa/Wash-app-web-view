import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
  }

  loadDashBoard(): void {
    this.router.navigateByUrl('/dashboard');
  }

  loadUser(): void {
    this.router.navigateByUrl('/user');
  }

  loadRequest(): void {
    this.router.navigateByUrl('/request');
  }

  loadProcesses(): void {
    this.router.navigateByUrl('/processes');
  }

  loadDeliverAgents(): void {
    this.router.navigateByUrl('/deliver-agent');
  }
}
