import {Component, OnInit} from '@angular/core';
import {apps_humansrc} from "@data/constants/apps-description";
import {faBuilding} from "@fortawesome/free-regular-svg-icons";
import {faPeopleLine} from "@fortawesome/free-solid-svg-icons/faPeopleLine";

@Component({
    selector: 'app-humansrc',
    templateUrl: './humansrc.component.html',
    styleUrls: ['./humansrc.component.css']
})
export class HumansrcComponent implements OnInit {
    apps = apps_humansrc;
    peopleLine=faPeopleLine;
    title_module='Departamento de Recursos Humanos';

    constructor() {
    }

    ngOnInit(): void {
    }

}
