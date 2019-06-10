import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrderRepository} from '../model/order.repository';
import {Order} from '../model/order.model';

@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {
  orderSent = false;
  submitted = false;

  constructor(public repository: OrderRepository, public order: Order) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(o => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}