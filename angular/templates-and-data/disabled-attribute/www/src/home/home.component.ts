import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'src/home/home.html'
})
export class HomeComponent {
  count: number = 0;
  buttonDisabled: boolean = false;
}
