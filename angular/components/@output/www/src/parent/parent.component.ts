import { Component, Output } from '@angular/core';
import {Child2Component} from '../child2/child2.component'

@Component({
  selector: 'parent',
  templateUrl: 'src/parent/parent.html'
})
export class ParentComponent {
  public count: number = 0;
  public userName = '';
  public userPhone = '';

  constructor() {   

  }

  message: string = '';

  nameEventHander($event: any) {
    this.userName = $event;
  }

  phoneEventHander($event: any) {
    this.userPhone = $event;
  }
}
