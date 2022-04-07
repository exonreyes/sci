import {Component, OnInit} from '@angular/core';
import {faAngleDown, faBoxesPacking, faChalkboardUser, faChartLine, faHome} from "@fortawesome/free-solid-svg-icons";
import {faBell, faEnvelope} from "@fortawesome/free-regular-svg-icons";

@Component({
    selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    angleDown = faAngleDown;
    bell = faBell;
    envelope = faEnvelope;

    modules = [{
        name: "Ventas", icon: "line-chart"
    }, {
        name: "Inventario", icon: "stock"
    }, {
        name: "Recursos Humanos", icon: "humanresource"
    }, {name: "Empresa", icon: "business"}];

    constructor() {
    }

    ngOnInit(): void {
    }

}
