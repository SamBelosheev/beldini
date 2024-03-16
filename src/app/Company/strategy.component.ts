import { Component } from '@angular/core';
import {products as data} from "../data/data.component";
import {IProduct} from "../models/models.component";



@Component({
  selector: 'app-Company',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {
  products: IProduct[] = data
}
