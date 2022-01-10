import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Unsubscribe } from 'redux';
import store from 'src/app/4-Redux/store';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit, OnDestroy {
  public safeSrc1: SafeResourceUrl;
  public safeSrc2: SafeResourceUrl;
  public safeSrc3: SafeResourceUrl;
  public safeSrc4: SafeResourceUrl;
  public windowSize: number = store.getState().windowSizeState.windowSize;
  private unsubscribeMe: Unsubscribe;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/2OwfYBsfxjc'
    );
    this.safeSrc2 = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/Ini6mckniDw'
    );
    this.safeSrc3 = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/PdYpCADhV3o'
    );
    this.safeSrc4 = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/fzP4xVWjyZk'
    );
  }

  ngOnInit(): void {
    this.unsubscribeMe = store.subscribe(() => {
      this.windowSize = store.getState().windowSizeState.windowSize;
    });
  }
  open() {
    const myWindow = window.open('/assets/papers.jpeg', '_blank');
  }

  ngOnDestroy() {
    this.unsubscribeMe();
  }
}
