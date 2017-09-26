import { Component, OnInit, ViewChild } from '@angular/core';

import * as gridMock from './mock/products.mock';
import * as echartMock from './mock/echarts.mock';

import { EChartOption, ECharts } from 'echarts-ng2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  gridData: any[] = gridMock.products;
  chartOption: any = echartMock.chartOption;
}
