import { Component } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Experience } from 'src/app/shared/dto/experience.i';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public icon = faFile;
  public experiences: Experience[] = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'BeBlocky',
      location: 'Addis Ababa, Ethiopia',
      from: "May 2023",
      to: "",
      current: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Yenetta Code',
      location: 'Addis Ababa, Ethiopia',
      from: "September 2020",
      to: "May 2023",
      current: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];
}
