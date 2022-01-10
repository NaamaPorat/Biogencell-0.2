import { Component, OnInit } from '@angular/core';
import { Unsubscribe } from 'redux';
import NewsModel from 'src/app/2-models/news.model';
import { articalList } from 'src/app/3-Services/newsData.service';
import store from 'src/app/4-Redux/store';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
})
export class NewsPageComponent implements OnInit {
  constructor() {}
  public windowSize: number = store.getState().windowSizeState.windowSize;
  private unsubscribeMe: Unsubscribe;
  public articalList: NewsModel[] = articalList;

  public acticalGroup1_2: NewsModel[] = [];
  public acticalGroup2_2: NewsModel[] = [];

  public acticalGroup1_3: NewsModel[] = [];
  public acticalGroup2_3: NewsModel[] = [];
  public acticalGroup3_3: NewsModel[] = [];

  ngOnInit(): void {
    this.unsubscribeMe = store.subscribe(() => {
      this.windowSize = store.getState().windowSizeState.windowSize;
    });

    this.acticalGroup1_2 = this.every_nth(1, 2);
    this.acticalGroup2_2 = this.every_nth(2, 2);

    this.acticalGroup1_3 = this.every_nth(1, 3);
    this.acticalGroup2_3 = this.every_nth(2, 3);
    this.acticalGroup3_3 = this.every_nth(3, 3);
  }

  every_nth(nth: number, of: number): NewsModel[] {
    let temp: NewsModel[] = [];

    for (let i = nth - 1; i < this.articalList.length; i += of) {
      temp.push(this.articalList[i]);
    }
    return temp;
  }
}

// public articalListDevidedToCouples: NewsModel[][] = [];
// public articalListDevidedToTripels: NewsModel[][] = [];

// devideTo(num: number): NewsModel[][] {
//   let chunk: any;
//   let temporary: NewsModel[][] = [];
//   for (let i = 0; i < this.articalList.length; i += num) {
//     chunk = this.articalList.slice(i, i + num);
//     temporary.push(chunk);
//   }
//   return temporary;
// }
// every_nth(arr: NewsModel[][], nth: number): NewsModel[] {
//   let every_nth: NewsModel[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     let chunc = arr[i];
//     every_nth.push(chunc[nth]);
//   }
//   return every_nth;
// }
