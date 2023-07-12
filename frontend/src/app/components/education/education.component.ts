import { trigger, transition, style, animate, query, stagger, keyframes, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/shared/education.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('listAnimation', [
      state('open', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('closed', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class EducationComponent implements OnInit {
  public isOpen = false;
  public icon = faGraduationCap;
  public loading: boolean = false;
  public educations: Education[] = [
    {
      school: 'Addis Ababa University',
      slug: 'software-engineering-and-computing-technologies-at-addis-ababa-university',
      degree: 'Bachelor of Science',
      field: 'Software Engineering and Computing Technologies',
      start: {
        month: 'June',
        year: '2021'
      },
      end: {
        month: 'June',
        year: '2025'
      },
      current: true,
      location: 'Addis Ababa, Ethiopia',
      description: 'Pursuing a Bachelor of Science degree in Software Engineering and Computing Technologies at Addis Ababa University. Engaging in a comprehensive curriculum that covers various aspects of software engineering and computing. Acquiring knowledge and skills in areas such as programming, algorithms, software development methodologies, and more. Actively involved in academic projects and collaborative learning experiences.'
    },
    {
      school: 'A2SV',
      slug: 'computer-science-at-a2sv',
      degree: null,
      field: 'Data Structures and Algorithms',
      start: {
        month: 'November',
        year: '2022'
      },
      end: {
        month: 'November',
        year: '2023'
      },
      current: true,
      location: 'Addis Ababa, Ethiopia',
      description: 'Completed a program focused on Data Structures and Algorithms at A2SV. Explored fundamental data structures such as arrays, linked lists, stacks, queues, trees, and graphs. Learned various algorithms for sorting, searching, and graph traversal. Developed problem-solving skills and gained a deeper understanding of efficient algorithms and their analysis. Applied the learned concepts to solve programming challenges and implement efficient solutions. Collaborated with peers to enhance knowledge and skills in the field of Data Structures and Algorithms.'
    },
    {
      school: 'SOS Hermann Gmeiner School',
      slug: 'high-school-at-sos-hermann-gmeiner-school',
      degree: null,
      field: 'High School',
      start: {
        month: 'September',
        year: '2017'
      },
      end: {
        month: 'April',
        year: '2021'
      },
      current: false,
      location: 'Jimma, Ethiopia',
      description: 'Completed high school at SOS Hermann Gmeiner School. Studied various subjects including Mathematics, Physics, Chemistry, Biology, English, Amharic, and more. Engaged in extracurricular activities such as sports, music, and art. Participated in community service activities and volunteered in various projects. Developed leadership skills and gained valuable experience in teamwork and collaboration. Graduated with a high school diploma and a certificate of merit.'
    }
  ];

  constructor(
  ) { }

  ngOnInit() {}

  get isInViewPort(): boolean {
  let componentElement = document.querySelector('app-education') || { getBoundingClientRect: () => ({
    top: 0,
    bottom: 0
  }) };

  const componentRect = componentElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  console.log(windowHeight);

  console.log(componentRect?.top, componentRect?.bottom);
  console.log(componentRect.top >= 0 &&
    componentRect.bottom <= windowHeight);

  return (
    componentRect.top >= 0 &&
    componentRect.bottom <= windowHeight
  );
}
}
