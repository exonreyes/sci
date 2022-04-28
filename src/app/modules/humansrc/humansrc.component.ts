import {Component, OnInit} from '@angular/core';
import {faPeopleLine} from "@fortawesome/free-solid-svg-icons/faPeopleLine";
import {apps_humansrc} from "@data/constants/apps/humansrc/humansrc.data";

@Component({
  selector: 'app-humansrc',
  templateUrl: './humansrc.component.html',
  styleUrls: ['./humansrc.component.css']
})
export class HumansrcComponent implements OnInit {
  apps = apps_humansrc;
  peopleLine = faPeopleLine;
  title_module = 'Departamento de Recursos Humanos';

  constructor() {
  }

  ngOnInit(): void {
  }

}
