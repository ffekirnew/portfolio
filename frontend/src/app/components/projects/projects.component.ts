import { Component } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { Project, Technology } from 'src/app/shared/project.inteface';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [TruncatePipe]
})
export class ProjectsComponent {
  public icon = faBuilding;
  public loading: boolean = false;
  public projects: Project[] = [];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.projectService.getAllProjects().subscribe((projects: any) => {
      this.projects = projects.projects;
      this.loading = false;
    });
  }

  getTechnologiesFormatted(technology: Technology): void {
    console.log(technology);
  }
}
