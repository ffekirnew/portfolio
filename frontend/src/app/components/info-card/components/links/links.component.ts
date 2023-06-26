import {Component} from '@angular/core';
import {NavigationLinkModel} from "../../../../shared/models/navigation-link.model";
import {faHome, faImage, faNewspaper} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    public links: NavigationLinkModel[] = [
        new NavigationLinkModel('Twitter', 'www.twitter.com/ffekirnew', faHome),
        new NavigationLinkModel('LinkedIn', 'www.linkedin.com/in/fkrnew-brhanu', faNewspaper),
        new NavigationLinkModel('Instagram', 'www.instagram.com/fkrnew.brhanu', faImage),
    ];
}
