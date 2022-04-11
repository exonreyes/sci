import {Component, OnInit} from '@angular/core';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faBell, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {AppConstants} from "@data/constants/AppConstants";

@Component({
    selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    angleDown = faAngleDown;
    bell = faBell;
    envelope = faEnvelope;
    urlDashboard = AppConstants.APP_NAME + '/' + AppConstants.DASHBOARD;
    private icon_path = "assets/icons/module/";
    modules = [{
        name: 'Ventas', icon: this.icon_path + 'sale/launcher.svg', path: 'sales'
    }, {
        name: 'Inventario', icon: this.icon_path + 'inventory/launcher.svg', path: 'inventory'
    }, {
        name: 'Recursos Humanos', icon: this.icon_path + 'humansrc/launcher.svg', path: 'humansrc'
    }, {
        name: 'Empresa', icon: this.icon_path + 'business/launcher.svg', path: 'business'
    }];

    constructor() {
    }

    ngOnInit(): void {

    }

}
