import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './core/app.router.module';
import { CoreModule } from './core';
import { ShareModule } from './share';
import { MaterialModule } from './material';
import { KendoModule } from './kendo';
import { EchartsModule } from './echarts';

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
    , AppRouterModule
    , CoreModule
    , ShareModule
    , MaterialModule
    , KendoModule
    , EchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
