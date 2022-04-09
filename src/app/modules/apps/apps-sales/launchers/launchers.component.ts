import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-launchers', templateUrl: './launchers.component.html', styleUrls: ['./launchers.component.css']
})
export class LaunchersComponent implements OnInit {
    private icon_path = 'assets/icons/module/sale/';
    public apps = [{
        icon: this.icon_path + 'sale.svg',
        name: 'Ventas',
        url: 'https://behance.net',
        description: 'De ventas a presupuestos',
        app_color: '#FFCA28 ',
    }, {
        icon: this.icon_path + 'cancel-sale.svg',
        name: 'Cancelaciones',
        url: 'https://behance.net',
        description: 'Procesamiento de devoluciones de compra o cancelaciones',
        app_color: '#F44336',
    }, {
        icon: this.icon_path + 'shop.svg',
        name: 'Punto de Venta',
        url: 'https://behance.net',
        description: 'Punto de venta para tiendas y servicios en general',
        app_color: '#388E3C',
    }, {
        icon: this.icon_path + 'contacts.svg',
        name: 'Contactos',
        url: 'https://behance.net',
        description: 'Centralice su libreta de direcciones',
        app_color: '#1976D2'
    }];

    constructor() {
    }

    ngOnInit(): void {
    }

}
