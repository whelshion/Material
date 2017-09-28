import { NgModule, SkipSelf, Optional } from '@angular/core';

import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { KendoModule } from '../kendo';
import { EchartsModule } from '../echarts';
import { DynamicModule } from '../dynamic';

import { HtmlOutletDirective } from './html-outlet/html-outlet.directive';

@NgModule({
  declarations: [
    HtmlOutletDirective
  ],
  imports: [
    SharedModule
    , MaterialModule
    , KendoModule
    , EchartsModule
    , DynamicModule
  ],
  exports: [
    HtmlOutletDirective
  ]
})
export class DirectiveModule {
  constructor() {}
  }
