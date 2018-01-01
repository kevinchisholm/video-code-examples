import {Component} from '@angular/core';

@Component({
  selector: 'product-reviews',
  templateUrl: 'src/products/productReviews.html'
})
export class ProductReviewsComponent {
  constructor() {   

  }

  public ngOnInit () {
    console.warn('ProductReviewsComponent - > ngOnInit');
  }
}
