import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MilestonePageComponent } from './components/pages/milestone-page/milestone-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: ':org/:repo',   component: HomeComponent },
  { path: ':org/:repo/sprint/:milestoneID',   component: MilestonePageComponent },
  { path: '',   redirectTo: '/CCAFS/MARLO', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
