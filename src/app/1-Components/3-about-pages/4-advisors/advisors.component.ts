import { Component, OnInit } from '@angular/core';
import {
  frankJVeith,
  davidJShulkin,
  martinGrajower,
  aaronCiechanover,
  shlomoBulvik,
  bruceBachenheimer,
  michaelFrogel,
  louisShenkman,
  markJNiven,
  oritKollet,
} from '../../../3-Services/personsData';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.css'],
})
export class AdvisorsComponent implements OnInit {
  constructor() {}
  public frankJVeith = frankJVeith;
  public davidJShulkin = davidJShulkin;
  public martinGrajower = martinGrajower;
  public aaronCiechanover = aaronCiechanover;
  public shlomoBulvik = shlomoBulvik;
  public oritKollet = oritKollet;
  public michaelFrogel = michaelFrogel;
  public louisShenkman = louisShenkman;
  public markJNiven = markJNiven;

  ngOnInit(): void {}
}
