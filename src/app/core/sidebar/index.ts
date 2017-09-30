import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  groups = [
    {
      name: '我的工作台',
      icon: '',
      menus: [
        {
          name: '我的任务',
          icon: '',
          link: ''
        }, {
          name: '任务管理',
          icon: '',
          link: ''
        }, {
          name: '新增任务',
          icon: '',
          link: ''
        }, {
          name: '人员管理',
          icon: '',
          link: ''
        }, {
          name: '快速分析',
          icon: '',
          link: ''
        }
      ]
    }, {
      name: '网络评估',
      icon: '',
      menus: [
        {
          name: '自动评估',
          icon: '',
          link: ''
        }, {
          name: '专项评估',
          icon: '',
          link: ''
        }, {
          name: '专题模块',
          icon: '',
          link: ''
        }, {
          name: '性能指标专项评估',
          icon: '',
          link: ''
        }, {
          name: '区域分析',
          icon: '',
          link: ''
        }
      ]
    }, {
      name: '专家引擎',
      icon: '',
      menus: [
        {
          name: '规则库管理',
          icon: '',
          link: ''
        }, {
          name: '案例库管理',
          icon: '',
          link: ''
        }, {
          name: '建模库管理',
          icon: '',
          link: ''
        }
      ]
    }, {
      name: '系统管理',
      icon: '',
      menus: [
        {
          name: '报表管理',
          icon: '',
          link: ''
        }, {
          name: '工参管理',
          icon: '',
          link: ''
        }, {
          name: '用户管理',
          icon: '',
          link: ''
        }, {
          name: '流程管理',
          icon: '',
          link: ''
        }, {
          name: '使用统计',
          icon: '',
          link: ''
        }, {
          name: '系统配置',
          icon: '',
          link: ''
        }
      ]
    }, {
      name: '基站保障',
      icon: '',
      menus: [
        {
          name: '故障站点现状',
          icon: '',
          link: ''
        }, {
          name: '历史走势',
          icon: '',
          link: ''
        }, {
          name: '基线设置',
          icon: '',
          link: ''
        }
      ]
    }, {
      name: '地图',
      icon: '',
      menus: [
        {
          name: 'GIS',
          icon: '',
          link: ''
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
