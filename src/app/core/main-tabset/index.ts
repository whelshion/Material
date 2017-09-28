import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-tabset',
  templateUrl: './main-tabset.component.html',
  styleUrls: ['./main-tabset.component.scss']
})
export class MainTabsetComponent {
  // Dynamic tabs demo
  activeTabIndex = 0;
  addTabPosition = 0;
  gotoNewTabAfterAdding = true;
  createWithLongContent = false;
  tabNavBackground: any = undefined;
  asyncTabs$: Observable<any>;
  tabLinks = [
    { label: 'Sun', link: 'sunny-tab' },
    { label: 'Rain', link: 'rainy-tab' },
    { label: 'Fog', link: 'foggy-tab' },
  ];
  dynamicTabs: { label: string, view: string, disabled: boolean }[] = [
    { label: '第一个', view: 'DyTaskListComponent', disabled: true }
    , { label: '第二个', view: 'DyTaskListComponent', disabled: true }
    , { label: '第三个', view: 'DyTaskListComponent', disabled: false }
    , { label: '第四个', view: 'DyTaskListComponent', disabled: true }
    , { label: '第五个', view: 'DyTaskListComponent', disabled: true }
    , { label: '第六个', view: 'DyTaskListComponent', disabled: false }
    , { label: '第七个', view: 'DyTaskListComponent', disabled: false }
    , { label: '第八个', view: 'DyTaskListComponent', disabled: false }
    , { label: '第九个', view: 'DyTaskListComponent', disabled: false }
    , { label: '第十个', view: 'DyTaskListComponent', disabled: false }
    , { label: '第十一个', view: 'DyTaskListComponent', disabled: true }
    , { label: '第十二个', view: 'DyTaskListComponent', disabled: true }
    , { label: '第十三个', view: 'DyTaskListComponent', disabled: false }
    , { label: '第十四个', view: 'DyTaskListComponent', disabled: false }
  ];



  constructor() {
    this.asyncTabs$ = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(this.dynamicTabs);
      }, 1000);
    });
  }

  componentMap = {
    DyTaskListComponent: '<app-dy-task-list></app-dy-task-list>'
    , MdSliderComponent: '<md-slider></md-slider>'
  };

  addTab(disabled: boolean): void {
    this.dynamicTabs.splice(this.activeTabIndex + 1, 0, {
      label: '动态TAB ' + (this.dynamicTabs.length + 1),
      view: 'MdSliderComponent',
      disabled: disabled
    });

    if (this.gotoNewTabAfterAdding) {
      this.activeTabIndex++;
    }
  }

  deleteTab(tab: any) {
    this.dynamicTabs.splice(this.dynamicTabs.indexOf(tab), 1);
  }

  swapTabLinks() {
    const temp = this.tabLinks[0];
    this.tabLinks[0] = this.tabLinks[1];
    this.tabLinks[1] = temp;
  }

  addToLabel() {
    this.tabLinks.forEach(link => link.label += 'extracontent');
  }

  toggleBackground() {
    this.tabNavBackground = this.tabNavBackground ? undefined : 'primary';
  }
}
