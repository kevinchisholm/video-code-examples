import { Component, Input } from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: 'src/child2/child2.html'
})
export class Child2Component {
  @Input('theUserName') name = '';
  @Input('thePhone') phone = '';
}
