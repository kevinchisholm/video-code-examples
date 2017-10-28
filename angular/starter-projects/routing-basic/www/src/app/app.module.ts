import {NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {Http, HttpModule, BaseRequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {Route1Component} from '../route1/route1.component';
import {Route2Component} from '../route2/route2.component';
import {Route3Component} from '../route3/route3.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {routing} from './routes';

@NgModule({
  providers: [
    BaseRequestOptions,
    HttpModule,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  imports: [BrowserModule, HttpModule, routing],
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    Route3Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
