import {NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {Http, HttpModule, BaseRequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {ParentComponent} from '../parent/parent.component';
import {Child1Component} from '../child1/child1.component';
import {Child2Component} from '../child2/child2.component';
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
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
