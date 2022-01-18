import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { setIsDrawerOpenAction } from 'src/app/4-Redux/drawer-state';
import store from 'src/app/4-Redux/store';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.css'],
})
export class MenuLinksComponent implements OnInit {
  @Input()
  public sidenav: MatSidenav;
  @Input()
  public isDrawerOpen: boolean;
  @Input()
  public windowSize: number;

  ngOnInit(): void {}
  //   public closeDrawer = (): void => {
  //     if (this.windowSize < 2) {
  //       this.sidenav.close();
  //       this.isDrawerOpen = false;
  //       store.dispatch(setIsDrawerOpenAction(false));
  //     }
  //   };
}
