import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Unsubscribe } from 'redux';
import store from 'src/app/4-Redux/store';
import PersonModel from '../../../2-models/person.model';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css'],
})
export class PersonCardComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input()
  public person: PersonModel;
  public windowSize: number = store.getState().windowSizeState.windowSize;
  private unsubscribeMe: Unsubscribe;
  ngOnInit(): void {
    this.unsubscribeMe = store.subscribe(() => {
      this.windowSize = store.getState().windowSizeState.windowSize;
    });
  }
  ngOnDestroy() {
    this.unsubscribeMe();
  }
}
