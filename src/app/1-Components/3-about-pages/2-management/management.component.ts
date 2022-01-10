import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'redux';
import store from 'src/app/4-Redux/store';
import {
  yaelPorat,
  michaelBelkin,
  eyalPeleg,
  michaelBarnea,
  marcDechamps,
} from '../../../3-Services/personsData';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
})
export class ManagementComponent implements OnInit, OnDestroy {
  public windowSize: number = store.getState().windowSizeState.windowSize;
  private unsubscribeMe: Unsubscribe;
  constructor() {}
  public yael = yaelPorat;
  public michaelBelkin = michaelBelkin;
  public eyalPeleg = eyalPeleg;
  public michaelBarnea = michaelBarnea;
  public marcDechamps = marcDechamps;

  ngOnInit(): void {
    this.unsubscribeMe = store.subscribe(() => {
      this.windowSize = store.getState().windowSizeState.windowSize;
    });
  }
  ngOnDestroy() {
    this.unsubscribeMe();
  }
}
