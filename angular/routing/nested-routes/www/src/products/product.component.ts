import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: 'src/products/product.html'
})
export class ProductComponent {
  productName: string = ''

  constructor(private route: ActivatedRoute) {

  }

  public ngOnInit () {
    this.route.params.subscribe((params: any) => {
      this.productName = params.productId;
    });
  }
}
