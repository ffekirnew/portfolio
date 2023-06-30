import { Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/shared/interfaces/education.i';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public icon = faGraduationCap;
  public educations: Education[] = [
    {
      id: 1,
      title: 'B.Sc. in Software Engineering',
      school: 'Addis Ababa University',
      location: 'Addis Ababa, Ethiopia',
      from: "May 2023",
      to: "",
      current: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: 'Software Engineer',
      school: 'SOS Herman Gmeiner International School',
      location: 'Jimma, Ethiopia',
      from: "September 2020",
      to: "May 2023",
      current: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];
}
