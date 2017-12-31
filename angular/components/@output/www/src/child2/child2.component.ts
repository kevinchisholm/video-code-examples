import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: 'src/child2/child2.html'
})
export class Child2Component {
  @Output() nameEvent = new EventEmitter<string>();
  @Output() phoneEvent = new EventEmitter<string>();

  userName: string = '';
  userPhone: string = '';

  onNameChange () {
    this.nameEvent.emit(this.userName);
  }

  onPhoneChange () {
    this.phoneEvent.emit(this.userPhone);
  }
}
