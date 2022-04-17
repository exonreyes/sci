import {Component, OnInit} from '@angular/core';
import {apps_business} from "@data/constants/apps-description";
import {faBuilding} from "@fortawesome/free-solid-svg-icons/faBuilding";

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
