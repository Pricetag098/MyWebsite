import { Component, OnInit } from '@angular/core';
import { Projects } from '../projectList'
import { Project } from '../project'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : Project[] = this.GetProjects();
  constructor() { }

  ngOnInit(): void {
    this.shuffle(this.projects)
  }
  shuffle(array): void {
    array.sort(() => Math.random() - 0.5);
  }
  GetProjects(): Project[] {
    return Projects;
  }
}
