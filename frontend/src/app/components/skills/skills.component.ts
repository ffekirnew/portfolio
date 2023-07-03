import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public icon = faStar;
  public devIconsFolder: string = "assets/mydevicons/";
  public skills: any = [
    { image: `${this.devIconsFolder}python/python-original.svg`, name: 'Python', },
    { image: `${this.devIconsFolder}django/django-plain.svg`, name: 'django', },
    { image: `${this.devIconsFolder}jupyter/jupyter-original.svg`, name: 'Jupyter', },

    { image: `${this.devIconsFolder}mongodb/mongodb-original.svg`, name: 'MongoDB', },
    { image: `${this.devIconsFolder}express/express-original.svg`, name: 'Express', },
    { image: `${this.devIconsFolder}angularjs/angularjs-original.svg`, name: 'Angular', },
    { image: `${this.devIconsFolder}nodejs/nodejs-original.svg`, name: 'nodejs', },

    { image: `${this.devIconsFolder}typescript/typescript-original.svg`, name: 'typescript', },
    { image: `${this.devIconsFolder}nestjs/nestjs-plain.svg`, name: 'nestjs', },

    { image: `${this.devIconsFolder}html5/html5-original.svg`, name: 'html5', },
    { image: `${this.devIconsFolder}css3/css3-original.svg`, name: 'css3', },
    { image: `${this.devIconsFolder}sass/sass-original.svg`, name: 'sass', },
    { image: `${this.devIconsFolder}javascript/javascript-original.svg`, name: 'javascript', },

    { image: `${this.devIconsFolder}tailwindcss/tailwindcss-plain.svg`, name: 'tailwindcss', },
    { image: `${this.devIconsFolder}bootstrap/bootstrap-original.svg`, name: 'bootstrap', },

    { image: `${this.devIconsFolder}c/c-original.svg`, name: 'cprogramming language', },
    { image: `${this.devIconsFolder}java/java-original.svg`, name: 'java', },

    { image: `${this.devIconsFolder}postgresql/postgresql-original.svg`, name: 'postresql' },
    { image: `${this.devIconsFolder}mysql/mysql-original.svg`, name: 'mysql' },
    { image: `${this.devIconsFolder}heroku/heroku-original.svg`, name: 'heroku' },

    { image: `${this.devIconsFolder}git/git-original.svg`, name: 'Git' },

    { image: `${this.devIconsFolder}github/github-original.svg`, name: 'Github' },
    { image: `${this.devIconsFolder}bash/bash-original.svg`, name: 'bash' },
    { image: `${this.devIconsFolder}linux/linux-original.svg`, name: 'linux' },
  ];
}
