import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import NewsModel from '../../../../2-models/news.model';
import { getArtical } from 'src/app/3-Services/newsData.service';

@Component({
  selector: 'app-news-read-more',
  templateUrl: './news-read-more.component.html',
  styleUrls: ['./news-read-more.component.css'],
})
export class NewsReadMoreComponent implements OnInit {
  public artical: NewsModel;
  constructor(
    private myActivatedRoute: ActivatedRoute,
    private myRouter: Router
  ) {}

  ngOnInit(): void {
    const articalNum = +this.myActivatedRoute.snapshot.params.articalNum;
    this.artical = getArtical(articalNum);

    if (!this.artical) {
      this.myRouter.navigateByUrl('/home');
    }
  }
}
