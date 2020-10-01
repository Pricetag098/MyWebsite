import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureComponent } from './azure/azure.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Work', component: WorkComponent},
  { path: 'Azure',component:AzureComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }