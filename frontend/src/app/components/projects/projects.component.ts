import { Component } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { Project, Technology } from 'src/app/shared/project.inteface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [TruncatePipe]
})
export class ProjectsComponent {
  public icon = faBuilding;
  // Example technologies
  public technologies: Technology[] = [
    { name: 'JavaScript' },
    { name: 'React' },
  ];

  // Example projects
  public projects: Project[] = [
    {
      name: 'Project A',
      slug: 'project-a',
      description: 'This is project A',
      status: 'active',
      createdAt: new Date(),
      technologies: this.technologies,
      image: "assets/images/project.jpeg"
    },
    {
      name: 'Project B',
      slug: 'project-b',
      description: 'This is project B',
      status: 'inactive',
      createdAt: new Date(),
      technologies: this.technologies,
      image: "assets/images/project.jpeg"
    },
    {
      name: 'Project C',
      slug: 'project-c',
      description: 'This is project C',
      status: 'active',
      createdAt: new Date(),
      technologies: this.technologies,
      image: "assets/images/project.jpeg"
    },
  ];
}
