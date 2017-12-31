import { Component, Output } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: 'src/parent/parent.html'
})
export class ParentComponent {

  public userName = '';
  public userPhone = '';

  constructor() {   

  }

  public ngOnInit () {

  }
}
