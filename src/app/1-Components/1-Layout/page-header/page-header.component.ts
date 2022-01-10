import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent implements OnInit {
  constructor() {}

  @Input()
  public pic: string;
  @Input()
  public title: string;

  ngOnInit(): void {}
}
