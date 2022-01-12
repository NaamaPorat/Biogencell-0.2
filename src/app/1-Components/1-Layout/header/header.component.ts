import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { setIsDrawerOpenAction } from 'src/app/4-Redux/drawer-state';
import store from 'src/app/4-Redux/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  public isDrawerOpen: boolean;
  @Input()
  public sidenav: MatSidenav;
  @Input()
  public windowSize: number;

  constructor() {}

  ngOnInit(): void {}
  public openDrawer() {
    this.sidenav.open();
    this.isDrawerOpen = true;
    store.dispatch(setIsDrawerOpenAction(true));
  }
  public closeDrawer() {
    this.sidenav.close();
    this.isDrawerOpen = false;
    store.dispatch(setIsDrawerOpenAction(false));
  }
}
