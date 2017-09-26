import { Component, OnInit, ViewChild } from '@angular/core';

import { OverlayContainer } from '@angular/material';

import * as gridMock from './mock/products.mock';
import * as echartMock from './mock/echarts.mock';

import { EChartOption, ECharts } from 'echarts-ng2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _dark = false;

  gridData: any[] = gridMock.products;
  chartOption: EChartOption = echartMock.chartOption;

  constructor(private oc: OverlayContainer) {
  }
  get dark() {
    return this._dark;
  }

  switchDarkTheme(dark: boolean) {
    this._dark = dark;
    // this.oc.themeClass = dark ? 'app-dark-theme' : null;
  }

}
