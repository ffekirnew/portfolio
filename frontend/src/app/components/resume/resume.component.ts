import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Experience } from 'src/app/shared/experience.interface';
import { ExperienceService } from 'src/app/shared/services/experience.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public icon = faFile;
  public loading: boolean = false;
  public experiences: Experience[] = [
    {
      role: 'Software Engineer',
      slug: 'software-engineer-at-beblocky',
      description: `Joining BeBlocky as a Software Engineering intern, I have the opportunity to work on cutting-edge projects that combine the power of JavaScript, Angular, Node.js, SQL, and MongoDB. Collaborating with a talented team, I contribute to the development of innovative software solutions. Through this experience, I gain practical knowledge in building scalable applications and leveraging modern technologies to solve real-world problems. The hybrid work environment provides a perfect balance between remote work and on-site collaboration, fostering a dynamic and inclusive learning atmosphere.`,
      company: 'BeBlocky',
      place: 'hybrid',
      type: 'internship',
      start: {
        month: 'May',
        year: '2023'
      },
      end: {
        month: 'Augest',
        year: '2023'
      },
      current: true,
      location: 'Addis Ababa, Ethiopia',
      skills: [
        { name: 'JavaScript' },
        { name: 'Angular' },
        { name: 'Node.js' },
        { name: 'SQL' },
        { name: 'MongoDB' },
      ],
      technologies: [
        { name: 'JavaScript' },
        { name: 'Angular' },
        { name: 'Node.js' },
        { name: 'SQL' },
        { name: 'MongoDB' },
      ]
    },
    {
      role: 'Software Engineer',
      slug: 'software-engineer-at-yenetta-code',
      description: `Currently working as a Software Engineering intern at Yenetta Code, I am immersed in a stimulating environment where I can refine my technical skills and gain valuable industry experience. Although the description of my specific role is yet to be provided, I am eager to contribute to the development of innovative software solutions. The internship offers an ideal blend of remote and on-site work, allowing for collaboration with a diverse team of professionals. This opportunity in Addis Ababa, Ethiopia, exposes me to the vibrant tech scene and enables me to make meaningful contributions to the company's projects.`,
      company: 'Yenetta Code',
      place: 'hybrid',
      type: 'internship',
      start: {
        month: 'February',
        year: '2023'
      },
      current: true,
      location: 'Addis Ababa, Ethiopia',
      skills: [],
      technologies: []
    },
    {
      role: 'Software Engineer',
      slug: 'software-engineer-at-minnovation',
      description: ` As a full-time Software Engineer at Minnovation, I am part of a dynamic team dedicated to pushing the boundaries of technology. Embracing the latest advancements, I contribute to the development of cutting-edge software solutions. Although the specific details of my role and the technologies involved are not provided, I am constantly honing my skills and expanding my expertise. The hybrid work environment allows me to collaborate effectively with colleagues and leverage the benefits of both remote and on-site work. Working at Minnovation offers a stimulating professional journey within the vibrant tech community of Addis Ababa, Ethiopia.`,
      company: 'Minnovation',
      place: 'hybrid',
      type: 'full-time',
      start: {
        month: 'March',
        year: '2023'
      },
      current: true,
      location: 'Addis Ababa, Ethiopia',
      skills: [
      ],
      technologies: [
      ]
    }
  ];

  constructor(
    private experienceService: ExperienceService
  ) { }

  ngOnInit() {
    // this.loading = true;
    // this.experienceService.getAllExperiences().subscribe((experiences: any) => {
    //   this.experiences = experiences.experiences;
    //   this.loading = false;
    // });
  }

}
