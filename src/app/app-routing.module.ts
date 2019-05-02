import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { MilestonePageComponent } from './components/pages/milestone-page/milestone-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: ':org/:repo',   component: HomeComponent },
  { path: ':org/:repo/sprint/:milestoneID',   component: MilestonePageComponent },
  { path: 'home',   redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile',   component: ProfilePageComponent, canActivate: [ AuthGuardService ] },
  { path: '',   redirectTo: '/CCAFS/MARLO', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
