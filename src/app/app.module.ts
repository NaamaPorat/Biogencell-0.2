import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './1-Components/1-Layout/layout/layout.component';

import { MenuLinksComponent } from './1-Components/1-Layout/menu-links/menu-links.component';
import { HeaderComponent } from './1-Components/1-Layout/header/header.component';
import { SideDrawerService } from './3-Services/sideDrawer.service';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeComponent } from './1-Components/6-home-page/home.component';
import { MediaComponent } from './1-Components/5-media-new-pages/media/media.component';
import { NewsPageComponent } from './1-Components/5-media-new-pages/news/news-page/news-page.component';
import { NewsCardComponent } from './1-Components/5-media-new-pages/news/news-card/news-card.component';
import { NewsReadMoreComponent } from './1-Components/5-media-new-pages/news/news-read-more/news-read-more.component';
import { PageHeaderComponent } from './1-Components/1-Layout/page-header/page-header.component';
import { PersonCardComponent } from './1-Components/2-people/person-card/person-card.component';
import { PersonReadMoreComponent } from './1-Components/2-people/person-read-more/person-read-more.component';
import { CompanyComponent } from './1-Components/3-about-pages/1-company/company.component';
import { ManagementComponent } from './1-Components/3-about-pages/2-management/management.component';
import { BoardComponent } from './1-Components/3-about-pages/3-board/board.component';
import { AdvisorsComponent } from './1-Components/3-about-pages/4-advisors/advisors.component';
import { PartnersComponent } from './1-Components/3-about-pages/5-partners/partners.component';
import { SolutionComponent } from './1-Components/4-tech-pages/solution/solution.component';
import { CellsComponent } from './1-Components/4-tech-pages/cells/cells.component';
import { ContactUsComponent } from './1-Components/7-contact-us-page/contact-us.component';
import { FooterComponent } from './1-Components/1-Layout/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuLinksComponent,
    HeaderComponent,
    HomeComponent,
    MediaComponent,
    NewsPageComponent,
    NewsCardComponent,
    NewsReadMoreComponent,
    PageHeaderComponent,
    PersonCardComponent,
    PersonReadMoreComponent,
    CompanyComponent,
    ManagementComponent,
    BoardComponent,
    AdvisorsComponent,
    PartnersComponent,
    SolutionComponent,
    CellsComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [SideDrawerService],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
