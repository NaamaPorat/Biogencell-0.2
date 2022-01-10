import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'redux';
import store from 'src/app/4-Redux/store';

@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.css'],
})
export class CellsComponent implements OnInit, OnDestroy {
  public windowSize: number = store.getState().windowSizeState.windowSize;
  private unsubscribeMe: Unsubscribe;
  constructor() {}
  panelOpenState = false;

  ngOnInit(): void {
    this.unsubscribeMe = store.subscribe(() => {
      this.windowSize = store.getState().windowSizeState.windowSize;
    });
  }
  ngOnDestroy() {
    this.unsubscribeMe();
  }
}
