import {Component, ViewEncapsulation} from '@angular/core';
import {PackagesComponent} from '../packages/packages.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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

  routeName: string;

  constructor (router: Router) {   
    router.events.subscribe((val: any) => {
      if (val
        && val.url
        && val.url !== '/') {
        this.routeName = val.url;
      } else if (val
        && val.urlAfterRedirects,
        val.urlAfterRedirects !== '/') {
          this.routeName = val.urlAfterRedirects;
      }
    });
  }

  public ngOnInit () {

  }
}
