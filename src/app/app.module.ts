import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicHTMLComponent } from './Components/dynamic-html/dynamic-html.component';
import {HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DynamicHTMLComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
