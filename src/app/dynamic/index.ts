import { NgModule } from '@angular/core';

import { ShareModule } from '../share';
import { MaterialModule } from '../material';
import { KendoModule } from '../kendo';
import { EchartsModule } from '../echarts';

import { DyTaskListComponent } from './dy-task-list';

@NgModule({
  declarations: [
    DyTaskListComponent
  ],
  imports: [
    ShareModule
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
