import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'product',
  templateUrl: 'src/products/product.html'
})
export class ProductComponent {
  constructor(private route: ActivatedRoute,
    private productService: ProductService) {

  }

  public ngOnInit () {
    this.route.params.subscribe((params: any) => {
      this.productService.data.productId = params.productId;
    });
  }
}
