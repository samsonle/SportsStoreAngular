import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDatasource} from './static.datasource';
import {Cart} from './cart.model';
import {Order} from './order.model';
import {OrderRepository} from './order.repository';
import {RestDatasource} from './rest.datasource';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';
import {ConnectionService} from './connection.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
    { provide: StaticDatasource, useClass: RestDatasource },
    RestDatasource, AuthService, ConnectionService]
})
export class ModelModule {}
