import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'product-reviews',
  templateUrl: 'src/products/productDetails.html'
})
export class ProductDetailsComponent {
  constructor(private productService: ProductService) {

  }
}
