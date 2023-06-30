import { Component } from '@angular/core';
import {NavigationLinkModel} from "../../shared/models/navigation-link.model";
import {
  faBuilding,
  faContactBook,
  faFile,
  faHome,
  faPersonSkiing,
  faStar,
  faUser,
  faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss']
})
export class NavigationSidebarComponent {

  public links: NavigationLinkModel[] = [
    new NavigationLinkModel('Home', '/home', faHome),
    new NavigationLinkModel('Introduction', '/home#introduction', faUser),
    new NavigationLinkModel('Resume', '/home#resume', faFile),
    new NavigationLinkModel('Education', '/home#education', faUserGraduate),
    new NavigationLinkModel('Specializations', '/home#specializations', faStar),
    new NavigationLinkModel('Skills', '/home#skills', faPersonSkiing),
    new NavigationLinkModel('Projects', '/home#projects', faBuilding),
    new NavigationLinkModel('Contact', '/home#contact', faContactBook)
  ];
  constructor() { }
}
