import {Component, OnInit} from '@angular/core';
import {faBuilding} from "@fortawesome/free-solid-svg-icons/faBuilding";
import {apps_business} from "@data/constants/apps/business/business.data";

@Component({
    selector: 'app-business', templateUrl: './business.component.html', styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
    apps = apps_business;
    title_module = 'Generales de la Empresa';
    building = faBuilding;

    constructor() {
    }

    ngOnInit(): void {
    }

}
