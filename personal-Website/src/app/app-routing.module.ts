import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Work', component: WorkComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }