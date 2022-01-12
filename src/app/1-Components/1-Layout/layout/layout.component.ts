import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { SideDrawerService } from 'src/app/3-Services/sideDrawer.service';
import { MatSidenav } from '@angular/material/sidenav';
import store from 'src/app/4-Redux/store';
import { setWindowSizeAction } from 'src/app/4-Redux/ws-state';
import { setIsDrawerOpenAction } from 'src/app/4-Redux/drawer-state';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private drawerService: SideDrawerService) {}
  public windowSize: number;
  public isDrawerOpen: boolean;
  private unsubscribeMe: Unsubscribe;

  ngOnInit() {
    //smaller than mobile
    if (window.innerWidth < 200) {
      this.windowSize = 0;
    }
    // mobile
    if (window.innerWidth > 200 && window.innerWidth <= 480) {
      this.windowSize = 1;
    }
    // iPads, Tablets
    if (window.innerWidth > 480 && window.innerWidth <= 768) {
      this.windowSize = 2;
    }
    // Small screens, laptops
    if (window.innerWidth > 768 && window.innerWidth <= 1300) {
      this.windowSize = 3;
    }
    // anything bigger
    if (window.innerWidth > 1300) {
      this.windowSize = 4;
    }
    store.dispatch(setWindowSizeAction(this.windowSize));

    // localStorage.setItem('ws', `${this.windowSize}`);
    this.isDrawerOpen = false;
    store.dispatch(setIsDrawerOpenAction(false));
    this.unsubscribeMe = store.subscribe(() => {
      this.isDrawerOpen = store.getState().DrawerState.isDrawerOpen;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const body = document.getElementsByTagName('body')[0];

    //smaller than mobile
    if (window.innerWidth < 200) {
      this.windowSize = 0;
    }
    // mobile
    if (window.innerWidth > 200 && window.innerWidth <= 480) {
      this.windowSize = 1;
    }
    // iPads, Tablets
    if (window.innerWidth > 480 && window.innerWidth <= 768) {
      this.windowSize = 2;
    }
    // Small screens, laptops
    if (window.innerWidth > 768 && window.innerWidth <= 1300) {
      this.windowSize = 3;
    }
    // anything bigger
    if (window.innerWidth > 1300) {
      this.windowSize = 4;
    }
    store.dispatch(setWindowSizeAction(this.windowSize));
    if (this.windowSize >= 2) {
      this.sidenav.close();
      this.isDrawerOpen = false;
      store.dispatch(setIsDrawerOpenAction(false));
    }
  }
  ngAfterViewInit(): void {
    this.drawerService.setSidenav(this.sidenav);
    this.sidenav.close();
  }
  ngOnDestroy() {
    localStorage.removeItem('ws');
    this.unsubscribeMe();
  }
}
