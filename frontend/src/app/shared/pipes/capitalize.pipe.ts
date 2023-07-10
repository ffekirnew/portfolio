import { Pipe } from "@angular/core";

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        const wordArray = value.split(' ');
        const capitalizedArray = wordArray.map(word => {
            const firstLetter = word.charAt(0).toUpperCase();
            const rest = word.slice(1);

            return firstLetter + rest;
        });

        return capitalizedArray.join(' ');
    }
}