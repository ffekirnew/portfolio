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
  public iconsDirectory: string = 'assets/icons/miscicons';
  public links: Link[] = [
    { name: 'Introduction', sectionRef: undefined, icon: `${this.iconsDirectory}/boy.svg` },
    { name: 'Resume', sectionRef: undefined, icon: `${this.iconsDirectory}/file-document.svg` },
    { name: 'Education', sectionRef: undefined, icon: `${this.iconsDirectory}/stack.svg` },
    // { name: 'Specializations', sectionRef: undefined, icon: `${this.iconsDirectory}` },
    { name: 'Skills', sectionRef: undefined, icon: `${this.iconsDirectory}/toolbox.svg` },
    { name: 'Projects', sectionRef: undefined, icon: `${this.iconsDirectory}/linear.svg` },
    { name: 'Contact', sectionRef: undefined, icon: `${this.iconsDirectory}/clipboard.svg` },
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
