import {NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {Http, HttpModule, BaseRequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {HomeComponent} from '../home/home.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {routing} from './routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  providers: [
    BaseRequestOptions,
    HttpModule,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  imports: [BrowserModule, HttpModule, routing, FormsModule],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
