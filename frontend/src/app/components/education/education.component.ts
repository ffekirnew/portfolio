import { state, style, transition, animate, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/shared/education.interface';

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
      school: 'Example University',
      slug: 'example-university',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      start: {
        month: 'September',
        year: '2018'
      },
      end: {
        month: 'May',
        year: '2022'
      },
      current: false,
      location: 'Example City, Example State',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.'
    },
  ];

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
