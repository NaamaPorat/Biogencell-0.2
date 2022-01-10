import { Component, Input, OnInit } from '@angular/core';
import NewsModel from 'src/app/2-models/news.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent implements OnInit {
  constructor() {}
  @Input()
  public artical: NewsModel | undefined;
  ngOnInit(): void {}
}
