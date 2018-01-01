import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'product-reviews',
  templateUrl: 'src/products/productDetails.html'
})
export class ProductDetailsComponent {
  constructor(private route: ActivatedRoute,
    private productService: ProductService) {

  }
}
