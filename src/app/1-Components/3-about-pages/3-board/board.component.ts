import { Component, OnInit } from '@angular/core';
import {
  yaelPorat,
  davidRaab,
  nissimDarvish,
  nadavChen,
  eyalPeleg,
  zeevMilbauer,
} from '../../../3-Services/personsData';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor() {}
  public yael = yaelPorat;
  public davidRaab = davidRaab;
  public nissimDarvish = nissimDarvish;
  public nadavChen = nadavChen;
  public eyalPeleg = eyalPeleg;
  public zeevMilbauer = zeevMilbauer;
  ngOnInit(): void {}
}
