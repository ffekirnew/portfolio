import { Component } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/shared/interfaces/project.i';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [TruncatePipe]
})
export class ProjectsComponent {
  public icon = faBuilding;
  public projects: Project[] = [
    {
      id: 1,
      title: 'BeBlocky',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'assets/images/project.jpeg'
    }
  ]
}
