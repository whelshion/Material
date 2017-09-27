import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabsetComponent } from './main-tabset.component';

describe('MainTabsetComponent', () => {
  let component: MainTabsetComponent;
  let fixture: ComponentFixture<MainTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
