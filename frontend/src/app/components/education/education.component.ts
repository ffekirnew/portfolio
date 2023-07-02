import { state, style, transition, animate, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/shared/interfaces/education.i';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class EducationComponent {
  public isOpen = false;
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

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
