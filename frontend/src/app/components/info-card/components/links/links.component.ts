import { Component } from '@angular/core';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    public socialLinks: any[] = [
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
