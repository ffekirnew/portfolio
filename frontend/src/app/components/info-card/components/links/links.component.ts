import { Component } from '@angular/core';
import { NavigationLinkModel } from "../../../../shared/models/navigation-link.model";
import { faHome, faImage, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { SocialLink } from 'src/app/shared/interfaces/social-link.i';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    public socialLinks: SocialLink[] = [
        {
            name: 'Github',
            url: 'https://www.github.com/ffekirnew',
            imageUrl: 'assets/mysocialicons/Github_white.svg'
        },
        {
            name: 'Gmail',
            url: 'mailto:fikernew.birhanu@aait.edu.et',
            imageUrl: 'assets/mysocialicons/Gmail_white.svg'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/fkrnew.brhanu',
            imageUrl: 'assets/mysocialicons/Instagram_white.svg'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/fkrnew-brhanu',
            imageUrl: 'assets/mysocialicons/LinkedIN_white.svg'
        },
        {
            name: 'Twitter',
            url: 'https://www.twitter.com/ffekirnew',
            imageUrl: 'assets/mysocialicons/Twitter_white.svg'
        },
        {
            name: 'Telegram',
            url: 'https://www.t.me/ffekirnew',
            imageUrl: 'assets/mysocialicons/Telegram_white.svg'
        },
    ];
}
