import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {StrategyComponent} from "./Company/strategy.component";
import {MindComponent} from "./mind/mind.component";
import {SurvivelComponent} from "./Library/survivel.component";
import {PrewComponent} from "./prew/prew.component";
import {ClubComponent} from "./club/club.component";


const routes: Routes = [
  {path: '', component: MindComponent},
  {path: 'Company', component: StrategyComponent},
  {path: 'mind', component: MindComponent},
  {path: 'Library', component: SurvivelComponent},
  {path: 'club', component: ClubComponent},
  {path: 'prew', component: PrewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
