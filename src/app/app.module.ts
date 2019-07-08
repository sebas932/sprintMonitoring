import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Nl2BrPipeModule } from 'nl2br-pipe';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';

// Services
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

//Components
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Pages
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { MilestoneCardComponent } from './components/shared/milestone-card/milestone-card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MilestonePageComponent } from './components/pages/milestone-page/milestone-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { RepoPageComponent } from './components/pages/repo-page/repo-page.component';
import { DoughnutChartComponent } from './components/pages/milestone-page/charts/doughnut-chart.component';
import { BarChartComponent } from './components/pages/milestone-page/charts/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    MilestoneCardComponent,
    LoadingComponent,
    MilestonePageComponent,
    ProfilePageComponent,
    RepoPageComponent,
    DoughnutChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Nl2BrPipeModule,
    DataTablesModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
