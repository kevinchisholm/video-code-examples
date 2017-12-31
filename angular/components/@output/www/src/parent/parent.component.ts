import { Component } from '@angular/core';
import {Child2Component} from '../child2/child2.component'

@Component({
  selector: 'parent',
  templateUrl: 'src/parent/parent.html'
})
export class ParentComponent {
  public userName = '';
  public userPhone = '';

  nameEventHander($event: any) {
    this.userName = $event;
  }

  phoneEventHander($event: any) {
    this.userPhone = $event;
  }
}
