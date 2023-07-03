import { Component } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Experience } from 'src/app/shared/experience.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public icon = faFile;
  public experiences: Experience[] = [
  {
    role: 'Software Engineer',
    slug: 'software-engineer',
    description: 'Worked on various software projects.',
    company: 'Example Company',
    place: 'remote',
    type: 'full-time',
    start: {
      month: 'January',
      year: '2020',
    },
    end: {
      month: 'December',
      year: '2021',
    },
    current: false,
    location: 'New York',
    skills: [
      { name: 'JavaScript' },
      { name: 'React' },
    ],
    technologies: [
      { name: 'Node.js' },
      { name: 'MongoDB' },
    ],
  },
  // Add more experience objects as needed
];
}
