import { Component } from '@angular/core';

@Component({
  selector: 'app-main-tabset',
  templateUrl: './main-tabset.component.html',
  styleUrls: ['./main-tabset.component.scss']
})
export class MainTabsetComponent {

  tabs: { label: string, view: string, show: boolean }[] = [
    { label: '第一个', view: 'DyTaskListComponent', show: true }
    // , { label: '第二个', view: 'app-dy-task-list', show: true }
    // , { label: '第三个', view: 'app-dy-task-list', show: true }
    // , { label: '第四个', view: 'app-dy-task-list', show: true }
    // , { label: '第五个', view: 'app-dy-task-list', show: true }
    // , { label: '第六个', view: 'app-dy-task-list', show: true }
    // , { label: '第七个', view: 'app-dy-task-list', show: true }
    // , { label: '第八个', view: 'app-dy-task-list', show: true }
    // , { label: '第九个', view: 'app-dy-task-list', show: true }
    // , { label: '第十个', view: 'app-dy-task-list', show: false }
    // , { label: '第十一个', view: 'app-dy-task-list', show: true }
    // , { label: '第十二个', view: 'app-dy-task-list', show: true }
    // , { label: '第十三个', view: 'app-dy-task-list', show: true }
    // , { label: '第十四个', view: 'app-dy-task-list', show: true }
  ];

  constructor() {
  }

  onTabClose(ev: Event, tab: any) { }
}
