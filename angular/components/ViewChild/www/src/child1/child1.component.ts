import { Component } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: 'src/child1/child1.html',
})
export class Child1Component {
  userInfo: any = {
    name: '',
    phone: ''
  };
}
