import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { StrategyComponent } from './Company/strategy.component';
import { MindComponent } from './mind/mind.component';
import { SurvivelComponent } from './Library/survivel.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductsComponent } from './products/products.component';
import { ClubComponent } from './club/club.component';
import { PrewComponent } from './prew/prew.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    StrategyComponent,
    MindComponent,
    SurvivelComponent,
    ProductsComponent,
    ClubComponent,
    PrewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
