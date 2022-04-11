import {Component, OnInit} from '@angular/core';
import {ICardLauncher} from "@shared/components/launcher-card/ilauncher-card.metadata";

@Component({
    selector: 'app-launchers',
    templateUrl: './launchers.component.html',
    styleUrls: ['./launchers.component.css']
})
export class LaunchersComponent implements OnInit {
    private icon_path = 'assets/icons/module/inventory/';
    apps: ICardLauncher[] = [{
        icon: this.icon_path + 'box.svg',
        name: 'Inventario',
        url: 'https://behance.net',
        description: 'Gestione sus actividades de stock y logística',
        app_color: '#F4CE8F',
    }, {
        icon: this.icon_path + 'shop.svg',
        name: 'Compras',
        url: 'https://behance.net',
        description: 'Órdenes de compra y acuerdos a sus proveedores',
        app_color: '#3c9b7a',
    }, {
        icon: this.icon_path + 'inventory-ajust.svg',
        name: 'Ajustes de inventario',
        url: 'https://behance.net',
        description: 'Realice la modificación del valor y/o la cantidad de stock en su negocio',
        app_color: '#e08e26',
    }, {
        icon: this.icon_path + 'providers.svg',
        name: 'Proveedores',
        url: 'https://behance.net',
        description: 'Catalogue a proveedores para que le brinden un mejor servicio/producto',
        app_color: '#1976D2'
    }];

    constructor() {
    }

    ngOnInit(): void {
    }

}
