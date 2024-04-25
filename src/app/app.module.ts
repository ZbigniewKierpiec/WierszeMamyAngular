import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { AnimatedBtnComponent } from './Elements/animated-btn/animated-btn.component';
import { FooterComponent } from './Components/footer/footer/footer.component';
import { WierszeComponent } from './Components/wiersze/wiersze.component';
import { HeaderComponent } from './Components/header/header.component';
import { HamburgerComponent } from './Elements/hamburger/hamburger.component';
import { Hamburger2Component } from './Elements/hamburger2/hamburger2.component';
import { MattbuttoneffectComponent } from './Elements/mattbuttoneffect/mattbuttoneffect.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PoemsPipe } from './Pipes/poems.pipe';
import { WierszeDetailsComponent } from './Components/wiersze/wiersze-details/wiersze-details.component';
import { After5LinePipe } from './Pipes/after5-line.pipe';
import { AddMarginPipe } from './Pipes/add-margin.pipe';
import { PoemsComponent } from './Components/wiersze/poems/poems.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AnimatedBtnComponent,
    FooterComponent,
    WierszeComponent,
    HeaderComponent,
    HamburgerComponent,
    Hamburger2Component,
    MattbuttoneffectComponent,
    PoemsPipe,
    WierszeDetailsComponent,
    After5LinePipe,
    AddMarginPipe,
    PoemsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
