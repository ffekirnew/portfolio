import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public icon = faStar;
  public devIconsFolder: string = "assets/icons/devicons/";
  public skills: any = [
    { image: `${this.devIconsFolder}python/python-original.svg`, name: 'Python', },
    { image: `${this.devIconsFolder}django/django-plain.svg`, name: 'Django', },
    { image: `${this.devIconsFolder}jupyter/jupyter-original.svg`, name: 'Jupyter', },

    { image: `${this.devIconsFolder}mongodb/mongodb-original.svg`, name: 'MongoDB', },
    { image: `${this.devIconsFolder}express/express-original.svg`, name: 'Express', },
    { image: `${this.devIconsFolder}angularjs/angularjs-original.svg`, name: 'Angular', },
    { image: `${this.devIconsFolder}nodejs/nodejs-original.svg`, name: 'Nodejs', },

    { image: `${this.devIconsFolder}typescript/typescript-original.svg`, name: 'TypeScript', },
    { image: `${this.devIconsFolder}nestjs/nestjs-plain.svg`, name: 'NestJs', },

    { image: `${this.devIconsFolder}html5/html5-original.svg`, name: 'HTML5', },
    { image: `${this.devIconsFolder}css3/css3-original.svg`, name: 'CSS3', },
    { image: `${this.devIconsFolder}sass/sass-original.svg`, name: 'SASS', },
    { image: `${this.devIconsFolder}javascript/javascript-original.svg`, name: 'JavaScript', },

    { image: `${this.devIconsFolder}tailwindcss/tailwindcss-plain.svg`, name: 'TailwindCss', },
    { image: `${this.devIconsFolder}bootstrap/bootstrap-original.svg`, name: 'Bootstrap', },

    { image: `${this.devIconsFolder}c/c-original.svg`, name: 'C Programming Language', },
    { image: `${this.devIconsFolder}java/java-original.svg`, name: 'Java', },

    { image: `${this.devIconsFolder}postgresql/postgresql-original.svg`, name: 'Postgres' },
    { image: `${this.devIconsFolder}mysql/mysql-original.svg`, name: 'MySQL' },
    { image: `${this.devIconsFolder}heroku/heroku-original.svg`, name: 'Heroku' },

    { image: `${this.devIconsFolder}git/git-original.svg`, name: 'Git' },

    { image: `${this.devIconsFolder}github/github-original.svg`, name: 'Github' },
    { image: `${this.devIconsFolder}bash/bash-original.svg`, name: 'Bash' },
    { image: `${this.devIconsFolder}linux/linux-original.svg`, name: 'Linux' },
    { image: `${this.devIconsFolder}dot-net/dot-net-original.svg`, name: '.Net' },
    { image: `${this.devIconsFolder}react/react-original.svg`, name: 'React' }
  ];
}
