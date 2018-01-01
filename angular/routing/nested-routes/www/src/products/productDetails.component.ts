import {Component} from '@angular/core';

@Component({
  selector: 'product-reviews',
  templateUrl: 'src/products/productDetails.html'
})
export class ProductDetailsComponent {
  constructor() {   

  }

  public ngOnInit () {
    console.warn('ProductDetailsComponent - > ngOnInit');
  }
}
