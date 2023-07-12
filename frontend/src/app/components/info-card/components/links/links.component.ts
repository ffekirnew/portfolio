import { Component } from '@angular/core';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    public socialIconsDirectory = 'icons/socialicons';
    public socialLinks: any[] = [
        {
            name: 'Github',
            url: 'https://www.github.com/ffekirnew',
            imageUrl: `assets/${this.socialIconsDirectory}/Github_white.svg`
        },
        {
            name: 'Gmail',
            url: 'mailto:fikernew.birhanu@aait.edu.et',
            imageUrl: `assets/${this.socialIconsDirectory}/Gmail_white.svg`
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/fkrnew.brhanu',
            imageUrl: `assets/${this.socialIconsDirectory}/Instagram_white.svg`
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/fkrnew-brhanu',
            imageUrl: `assets/${this.socialIconsDirectory}/LinkedIN_white.svg`
        },
        {
            name: 'Twitter',
            url: 'https://www.twitter.com/ffekirnew',
            imageUrl: `assets/${this.socialIconsDirectory}/Twitter_white.svg`
        },
        {
            name: 'Telegram',
            url: 'https://www.t.me/ffekirnew',
            imageUrl: `assets/${this.socialIconsDirectory}/Telegram_white.svg`
        },
    ];
}
