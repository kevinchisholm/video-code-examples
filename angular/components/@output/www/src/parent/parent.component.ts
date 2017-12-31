import { Component } from '@angular/core';

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
