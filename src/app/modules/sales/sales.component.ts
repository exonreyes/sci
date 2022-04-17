import {Component, OnInit} from '@angular/core';
import {apps_sales} from "@data/constants/apps-description";
import {faShop} from "@fortawesome/free-solid-svg-icons/faShop";

@Component({
    selector: 'app-sales', templateUrl: './sales.component.html', styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
    apps = apps_sales;
    title_module = 'Deparamento de Ventas';
    shop = faShop;

    constructor() {
    }

    ngOnInit(): void {
    }

}
