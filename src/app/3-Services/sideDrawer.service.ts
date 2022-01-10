import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import store from '../4-Redux/store';

@Injectable()
export class SideDrawerService {
  private sidenav: MatSidenav;
  private windowSize: number = store.getState().windowSizeState.windowSize;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.windowSize >= 2 ? this.sidenav.open() : null;
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}
