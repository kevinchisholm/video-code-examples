import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'src/home/home.html',
  styleUrls:  ['src/home/home.css']
})

export class HomeComponent {
  selectedDay: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
}
