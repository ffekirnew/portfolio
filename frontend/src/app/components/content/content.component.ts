import { Component } from '@angular/core';
import { faUser, faFile, faUserGraduate, faStar, faPersonSkiing, faBuilding, faContactBook } from '@fortawesome/free-solid-svg-icons';

interface Link {
  name: string;
  sectionRef: HTMLElement | null | undefined;
  icon: any;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public links: Link[] = [
    { name: 'Introduction', sectionRef: undefined, icon: faUser },
    { name: 'Resume', sectionRef: undefined, icon: faFile },
    { name: 'Education', sectionRef: undefined, icon: faUserGraduate },
    { name: 'Specializations', sectionRef: undefined, icon: faStar },
    { name: 'Skills', sectionRef: undefined, icon: faPersonSkiing },
    { name: 'Projects', sectionRef: undefined, icon: faBuilding },
    { name: 'Contact', sectionRef: undefined, icon: faContactBook }
  ];

  ngAfterViewInit() {
    this.links.forEach(link => {
      link.sectionRef = document.getElementById(link.name.toLowerCase());
    });
  }

  scrollToSection(sectionRef: any) {
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
