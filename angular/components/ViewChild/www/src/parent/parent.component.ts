import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {Child1Component} from '../child1/child1.component'
import {Child2Component} from '../child2/child2.component'

@Component({
  selector: 'parent',
  templateUrl: 'src/parent/parent.html'
})
export class ParentComponent {
  @ViewChild(Child1Component) child1: Child1Component;
  @ViewChild(Child2Component) child2: Child1Component;

  userInfo1: any = {
    name: '',
    phone: ''
  };

  userInfo2: any = {
    name: '',
    phone: ''
  };

  ngAfterViewInit() {
    this.userInfo1 = this.child1.userInfo;
    this.userInfo2 = this.child2.userInfo;
  }
}
