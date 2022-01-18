import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSidenav } from '@angular/material/sidenav';
import { setIsDrawerOpenAction } from 'src/app/4-Redux/drawer-state';
import store from 'src/app/4-Redux/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion;

  @Input()
  public isDrawerOpen: boolean;

  @Input()
  public windowSize: number;

  constructor() {}

  ngOnInit(): void {}
  // public openDrawer() {
  //   // this.sidenav.open();
  //   this.isDrawerOpen = true;
  //   store.dispatch(setIsDrawerOpenAction(true));
  // }
  // public closeDrawer = (): void => {
  //   // this.sidenav.close();
  //   this.isDrawerOpen = false;
  //   store.dispatch(setIsDrawerOpenAction(false));
  // };
  ngAfterViewInit() {}
}
