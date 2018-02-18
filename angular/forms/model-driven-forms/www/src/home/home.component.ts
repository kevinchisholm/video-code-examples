import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: 'src/home/home.html',
  styleUrls:  ['src/home/home.css']
})
export class HomeComponent {
  registerForm: FormGroup;
  formData: any = {address: {}};

	constructor(private formBuilder: FormBuilder) {
 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      checkboxSignUp: '',
      gender: '',
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    });

    this.registerForm.valueChanges.subscribe((value: any) => {
      this.formData = value;

      console.warn('registerForm.valueChanges: value');
      console.dir(value);
    });
  }
}
