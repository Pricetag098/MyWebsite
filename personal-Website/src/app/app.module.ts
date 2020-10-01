import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SpecsComponent } from './specs/specs.component';
import { WorkComponent } from './work/work.component';
import { AzureComponent } from './azure/azure.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    SpecsComponent,
    WorkComponent,
    AzureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
