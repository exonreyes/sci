import {Component, OnInit} from '@angular/core';
import {ICardLauncher} from "@shared/components/launcher-card/ilauncher-card.metadata";
import {AppConstants} from "@data/constants/AppConstants";

@Component({
    selector: 'app-launchers', templateUrl: './launchers.component.html', styleUrls: ['./launchers.component.css']
})
export class LaunchersComponent implements OnInit {
    private icon_path = 'assets/icons/module/humansrc/';
    apps: ICardLauncher[] = [{
        name: 'Usuarios',
        description: 'Admininstre los usuarios que interactuan con el sistema',
        icon: this.icon_path + 'user-password.svg',
        url: AppConstants.APP_NAME + '/' + AppConstants.MOD_HUMANSRC + '/' + 'users',
        app_color: '#3c9b7a',
    }, {
        name: 'Empleados',
        icon: this.icon_path + 'employees.svg',
        description: 'Centralice la información de los empleados',
        url: 'https://behance.net',
        app_color: '#F4CE8F'
    }, {
        name: 'Roles',
        icon: this.icon_path + 'users-role.svg',
        description: 'Controle permisos de los usuarios en los diversos modulos',
        url: 'https://behance.net',
        app_color: '#e08e26'
    }]

    constructor() {
    }

    ngOnInit(): void {
    }

}
