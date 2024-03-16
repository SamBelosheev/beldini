import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {StrategyComponent} from "./Company/strategy.component";
import {MindComponent} from "./mind/mind.component";
import {SurvivelComponent} from "./Library/survivel.component";

const routes: Routes = [
  {path: '', component: MindComponent},
  {path: 'Company', component: StrategyComponent},
  {path: 'mind', component: MindComponent},
  {path: 'Library', component: SurvivelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
