import {Component, Input} from '@angular/core';
import {IProduct} from "../models/models.component";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() product: IProduct

  details = false
  scale: null
}
