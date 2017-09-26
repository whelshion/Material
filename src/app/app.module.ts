import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ShareModule } from './share/share.module';
import { MaterialModule } from './material/material.module';
import { KendoModule } from './kendo/kendo.module';
import { EchartsModule } from './echarts/echarts.module';

import { AppComponent } from './app.component';

import 'hammerjs';

// 引入flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

import 'echarts/theme/dark';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , MaterialModule
    , KendoModule
    , EchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
