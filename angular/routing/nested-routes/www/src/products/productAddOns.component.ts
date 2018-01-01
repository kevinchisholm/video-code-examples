import {Component} from '@angular/core';

@Component({
  selector: 'product-add-ons',
  templateUrl: 'src/products/productAddOns.html'
})
export class ProductAddOnsComponent {
  constructor() {   

  }

  public ngOnInit () {
    console.warn('ProductAddOnsComponent - > ngOnInit');
  }
}
