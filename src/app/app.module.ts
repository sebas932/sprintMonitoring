import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Nl2BrPipeModule} from 'nl2br-pipe';

// Services
// import { GithubService } from './services/github.service';

//Components
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Pages
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { MilestoneCardComponent } from './components/shared/milestone-card/milestone-card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MilestonePageComponent } from './components/pages/milestone-page/milestone-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    MilestoneCardComponent,
    LoadingComponent,
    MilestonePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Nl2BrPipeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
