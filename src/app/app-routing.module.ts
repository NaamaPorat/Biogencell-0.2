import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './1-Components/6-home-page/home.component';
import { MediaComponent } from './1-Components/5-media-new-pages/media/media.component';
import { NewsPageComponent } from './1-Components/5-media-new-pages/news/news-page/news-page.component';
import { NewsReadMoreComponent } from './1-Components/5-media-new-pages/news/news-read-more/news-read-more.component';
import { ManagementComponent } from './1-Components/3-about-pages/2-management/management.component';
import { CompanyComponent } from './1-Components/3-about-pages/1-company/company.component';
import { BoardComponent } from './1-Components/3-about-pages/3-board/board.component';
import { AdvisorsComponent } from './1-Components/3-about-pages/4-advisors/advisors.component';
import { PartnersComponent } from './1-Components/3-about-pages/5-partners/partners.component';
import { SolutionComponent } from './1-Components/4-tech-pages/solution/solution.component';
import { CellsComponent } from './1-Components/4-tech-pages/cells/cells.component';
import { PersonReadMoreComponent } from './1-Components/2-people/person-read-more/person-read-more.component';
import { ContactUsComponent } from './1-Components/7-contact-us-page/contact-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'p/:urlName', component: PersonReadMoreComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'board', component: BoardComponent },
  { path: 'experts', component: AdvisorsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'stem-cells', component: CellsComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'artical/:articalNum', component: NewsReadMoreComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
