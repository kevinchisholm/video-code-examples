import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'product-reviews',
  templateUrl: 'src/products/productReviews.html'
})
export class ProductReviewsComponent {
  constructor(private productService: ProductService) {

  }
}
