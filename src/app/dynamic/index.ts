import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { KendoModule } from '../kendo';
import { EchartsModule } from '../echarts';

import { DyTaskListComponent } from './dy-task-list';

@NgModule({
  declarations: [
    DyTaskListComponent
  ],
  imports: [
    SharedModule
    , MaterialModule
    , KendoModule
    , EchartsModule
  ],
  exports: [
    DyTaskListComponent
  ],
  entryComponents: [DyTaskListComponent]
})
export class DynamicModule { }
