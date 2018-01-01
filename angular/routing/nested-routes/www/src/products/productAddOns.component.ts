import {Component} from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'product-add-ons',
  templateUrl: 'src/products/productAddOns.html'
})
export class ProductAddOnsComponent {
  constructor(private productService: ProductService) {   

  }

  public ngOnInit () {
    console.warn('ProductAddOnsComponent - > ngOnInit');
  }
}
