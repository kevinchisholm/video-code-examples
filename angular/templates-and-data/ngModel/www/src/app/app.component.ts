import {Component, ViewEncapsulation} from '@angular/core';
import {PackagesComponent} from '../packages/packages.component';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/app.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls:  [
    'src/app/reset.css',
    'src/app/app.css',
    'src/app/font-awesome.min.css'
    ]
})
export class AppComponent {

  constructor () {   

  }

  public ngOnInit () {

  }
}
