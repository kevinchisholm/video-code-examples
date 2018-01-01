import {Component} from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: 'src/products/product.html'
})
export class ProductComponent {
  constructor() {   

  }

  public ngOnInit () {
    console.warn('ProductComponent - > ngOnInit');
  }
}
