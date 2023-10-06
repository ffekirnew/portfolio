import { Component } from '@angular/core';

interface Link {
  name: string;
  sectionRef: HTMLElement | null | undefined;
  section: string;
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
    { name: 'About Me', section: 'about', sectionRef: undefined, icon: `${this.iconsDirectory}/boy.svg` },
    { name: 'My Resume', section: 'resume', sectionRef: undefined, icon: `${this.iconsDirectory}/file-document.svg` },
    { name: 'My Education', section: 'education', sectionRef: undefined, icon: `${this.iconsDirectory}/stack.svg` },
    // { name: 'Specializations', sectionRef: undefined, icon: `${this.iconsDirectory}` },
    { name: 'My Skills', section: 'skills', sectionRef: undefined, icon: `${this.iconsDirectory}/toolbox.svg` },
    { name: 'My Projects', section: 'projects', sectionRef: undefined, icon: `${this.iconsDirectory}/linear.svg` },
    // { name: 'Contact', sectionRef: undefined, icon: `${this.iconsDirectory}/clipboard.svg` },
  ];

  ngAfterViewInit() {
    this.links.forEach(link => {
      link.sectionRef = document.getElementById(link.section.toLowerCase());
    });
  }

  scrollToSection(sectionRef: any) {
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth', padding: '1rem' });
    }
  }
}
