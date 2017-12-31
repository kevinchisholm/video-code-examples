import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: 'src/child1/child1.html',
})
export class Child1Component {
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
