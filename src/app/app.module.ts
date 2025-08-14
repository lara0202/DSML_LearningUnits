import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Unit1Component } from './unit1/unit1.component';
import { Unit2Component } from './unit2/unit2.component';
import { Unit3Component } from './unit3/unit3.component';
import { Unit4Component } from './unit4/unit4.component';
import { Unit5Component } from './unit5/unit5.component';
import { Unit6Component } from './unit6/unit6.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    Unit1Component,
    Unit2Component,
    Unit3Component,
    Unit4Component,
    Unit5Component,
    Unit6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
