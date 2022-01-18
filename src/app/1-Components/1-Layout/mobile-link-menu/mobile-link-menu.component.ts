import { Component, Input, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-mobile-link-menu',
  templateUrl: './mobile-link-menu.component.html',
  styleUrls: ['./mobile-link-menu.component.css'],
})
export class MobileLinkMenuComponent implements OnInit {
  @Input()
  public accordion: MatAccordion;
  constructor() {}

  ngOnInit(): void {}
}
