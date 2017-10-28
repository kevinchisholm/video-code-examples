import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'src/home/home.html'
})
export class HomeComponent {
  days : any = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
}
