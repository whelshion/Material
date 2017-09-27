import { NgModule, SkipSelf, Optional } from '@angular/core';

import { ShareModule } from '../share';
import { MaterialModule } from '../material';
import { KendoModule } from '../kendo';
import { EchartsModule } from '../echarts';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { SidebarComponent } from './sidebar';
import { MainTabsetComponent } from './main-tabset';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainTabsetComponent,
    PageNotFoundComponent
  ],
  imports: [
    ShareModule
    , MaterialModule
    , KendoModule
    , EchartsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainTabsetComponent
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('不能重复加载CoreModule模块...');
    }
  }
}

import {OverlayContainer} from '@angular/material';
export class MyAppModule {
  constructor(overlayContainer: OverlayContainer) {
    // overlayContainer.themeClass = 'app-dark-theme';
  }
}
