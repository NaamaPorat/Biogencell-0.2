import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { setIsDrawerOpenAction } from 'src/app/4-Redux/drawer-state';
import store from 'src/app/4-Redux/store';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.css'],
})
export class MenuLinksComponent implements OnInit {
  constructor() {}
  @Input()
  public sidenav: MatSidenav;
  ngOnInit(): void {}

  public closeDrawer() {
    this.sidenav.close();
    store.dispatch(setIsDrawerOpenAction(false));
  }
}
