import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-tabset',
  templateUrl: './main-tabset.component.html',
  styleUrls: ['./main-tabset.component.scss']
})
export class MainTabsetComponent implements OnInit {
  tabs: { label: string, show: boolean }[] = [
    { label: '第一个', show: true }
    , { label: '第二个', show: true }
    , { label: '第三个', show: true }
    , { label: '第四个', show: true }
    , { label: '第五个', show: true }
    , { label: '第六个', show: true }
    , { label: '第七个', show: true }
    , { label: '第八个', show: true }
    , { label: '第九个', show: true }
    , { label: '第十个', show: false }
    , { label: '第十一个', show: true }
    , { label: '第十二个', show: true }
    , { label: '第十三个', show: true }
    , { label: '第十四个', show: true }
  ];
  constructor() { }

  ngOnInit() {
  }
  onTabClose(ev: Event, tab: any): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.tabs = this.tabs.filter(_tab => _tab.label !== tab.label);
  }
}
