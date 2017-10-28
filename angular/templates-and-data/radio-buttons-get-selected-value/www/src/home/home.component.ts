import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'src/home/home.html',
  styleUrls:  ['src/home/home.css']
})

export class HomeComponent {
  selectedDay: string = '';
  days: any = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];

  //event handler for the radio button's change event
  radioChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
}
