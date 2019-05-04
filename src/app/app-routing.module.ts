import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RepoPageComponent } from './components/pages/repo-page/repo-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { MilestonePageComponent } from './components/pages/milestone-page/milestone-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: ':org/:repo',   component: RepoPageComponent },
  { path: ':org/:repo/sprint/:milestoneID',   component: MilestonePageComponent },
  { path: 'profile',   component: ProfilePageComponent, canActivate: [ AuthGuardService ] },
  { path: 'home',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
