import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'redux';
import store from 'src/app/4-Redux/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public windowSize: number = store.getState().windowSizeState.windowSize;
  private unsubscribeMe: Unsubscribe;

  constructor() {}

  ngOnInit(): void {
    this.unsubscribeMe = store.subscribe(() => {
      this.windowSize = store.getState().windowSizeState.windowSize;
    });
  }
  ngOnDestroy() {
    this.unsubscribeMe();
  }
}
