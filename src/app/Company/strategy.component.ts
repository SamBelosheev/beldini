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
  show = false
  show1 = false
  show2 = false
  show3 = false
  show4 = false
  show5 = false
  show6 = false
  show7 = false
}


