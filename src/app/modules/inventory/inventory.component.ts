import {Component, OnInit} from '@angular/core';
import {apps_inventory} from "@data/constants/apps-description";
import {faBoxesPacking} from "@fortawesome/free-solid-svg-icons/faBoxesPacking";

@Component({
    selector: 'app-inventory', templateUrl: './inventory.component.html', styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
    apps = apps_inventory;
    title_module = 'Departamento de Inventarios';
    boxes_packing = faBoxesPacking;

    constructor() {
    }

    ngOnInit(): void {
    }

}
