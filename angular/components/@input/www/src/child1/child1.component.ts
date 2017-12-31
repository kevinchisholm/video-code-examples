import {Component, Input } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: 'src/child1/child1.html',
})
export class Child1Component {
  @Input() userNameFromParent = '';
  @Input() userPhoneFromParent = '';
}
