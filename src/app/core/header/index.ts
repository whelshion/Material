import { ChangeDetectionStrategy, Component, EventEmitter, Output, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.toggle.emit();
  }

  logout() {
    // this.store$.dispatch({type: actions.ActionTypes.LOGOUT});
  }

  onChange(checked) {
    this.toggleDarkTheme.emit(checked);
  }
}
