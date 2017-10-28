import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'src/home/home.html'
})
export class HomeComponent {
  content: string = "";
  count: number = 0;
  
  setMessage1 () {
    this.content = 'This is message # 1';
  }
}
