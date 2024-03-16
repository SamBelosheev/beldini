import { Component } from '@angular/core';

import {products as data} from './data/data.component'
import {IProduct} from "./models/models.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gamesWorlds';

  products: IProduct [] = data
}
