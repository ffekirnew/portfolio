import { Component } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { Project, Technology } from 'src/app/shared/project.inteface';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [TruncatePipe]
})
export class ProjectsComponent {
  public icon = faBuilding;
  public loading: boolean = false;
  public projects: Project[] = [];
  public dummyProjects: Project[] = [
    {
      name: "X Games",
      slug: "x-games",
      description: "X Games let's you find the best games from a countless list of awesome games released over the years.",
      status: "active",
      createdAt: new Date(),
      technologies: [{ name: "React" }, { name: "Zod" }, { name: "React Query" }],
      image: "../../../assets/projects/xGames.png",
      link: "https://game-hub.fikernew-birhanu.me"
    },
    {
      name: "ThoughtTrail AI",
      slug: "thoughttrial-ai",
      description: "Your AI-based second brain. Get advantage by using an AI tool specifically designed to help you achieve more! ThoughtTrail will follow your thoughts and give you insights to help you achieve that next level.",
      status: "active",
      createdAt: new Date(),
      technologies: [{ name: "React" }, { name: "MongoDb" }, { name: "Express.js" }, { name: "Zod" }, { name: "React Query" }],
      image: "../../../assets/projects/thoughtTrial.png",
      link: "https://thoughttrial.fikernew-birhanu.me"

    },
    {
      name: "Portfolio Site",
      slug: "portfolio-site",
      description: "This website displays my academic, professional and personal projects.",
      status: "active",
      createdAt: new Date(),
      technologies: [{ name: "Angular" }, { name: "MongoDb" }, { name: "Express.js" }],
      image: "../../../assets/projects/portfolioSite.png",
      link: "https://fikernew-birhanu.me"

    },
    {
      name: "Limitless AI",
      slug: "limitless",
      description: "I worked on this project with a group of colleagues for a hackathon.",
      status: "active",
      createdAt: new Date(),
      technologies: [{ name: "Angular" }, { name: "MongoDb" }, { name: "Express.js" }],
      image: "../../../assets/projects/limitless.png",
      link: "https://data-nest-3ei5.vercel.app/"

    },
  ];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projects = this.dummyProjects;
  }

  getTechnologiesFormatted(technology: Technology): void {
    console.log(technology);
  }
}
