import {Component} from '@angular/core';
import {Http, Headers, BaseRequestOptions, } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'home',
  templateUrl: 'src/home/home.html',
  styleUrls:  ['src/home/home.css']
})
export class HomeComponent {
  //this contains the "packages" that appears in the UI
  destinations: Array<any> = [];

	constructor(private http: Http) {}

  //when the component is initialized
  public ngOnInit () {
    //wait one second
    setTimeout(() => {
      //load packages
      this.loadPackages();
    }, 1000);
  }

  loadPackages () {
    //reference the http service
    this.http
      //make the http GET request
      .get('https://api.myjson.com/bins/1g87r')
      
      //convert it to JSON
      .map((res: any) => res.json())

      //subscribe to this JSON
      .subscribe ((data: any) => {
          //set the "packages" in the UI
          this.destinations = data;
        }
      );
  }
}
