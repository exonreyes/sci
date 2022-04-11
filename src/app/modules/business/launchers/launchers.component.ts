import {Component, OnInit} from '@angular/core';
import {ICardLauncher} from "@shared/components/launcher-card/ilauncher-card.metadata";

@Component({
    selector: 'app-launchers', templateUrl: './launchers.component.html', styleUrls: ['./launchers.component.css']
})
export class LaunchersComponent implements OnInit {
    private icon_path = 'assets/icons/module/business/';
    apps: ICardLauncher[] = [{
        name: 'Bancos',
        description: 'Centralice información de sus bancos para agilizar pagos de ventas',
        icon: this.icon_path + 'bank.svg',
        url: 'https://behance.net',
        app_color: '#3c9b7a',
    }]

    constructor() {
    }

    ngOnInit(): void {
    }

}
