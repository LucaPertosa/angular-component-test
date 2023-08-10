import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  addToCart: number = 0;
  product = {
    name: 'iPhone 13',
    price: 999,
    color: 'Red',
    discount: 9,
    inStock: 10
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

  decCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--
    }
  }

  incCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++
    }
  }
}
