import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchers',
  templateUrl: './launchers.component.html',
  styleUrls: ['./launchers.component.css']
})
export class LaunchersComponent implements OnInit {
  private icon_path = 'assets/icons/module/humansrc/';
  public apps = [{
    icon: this.icon_path + 'employees.svg',
    name: 'Empleados',
    url: 'https://behance.net',
    description: 'Centralice la información de los empleados',
    app_color: '#F4CE8F',
  }, {
    icon: this.icon_path + 'user-password.svg',
    name: 'Usuarios',
    url: 'https://behance.net',
    description: 'Admininstre los usuarios que interactuan con el sistema',
    app_color: '#3c9b7a',
  }, {
    icon: this.icon_path + 'users-role.svg',
    name: 'Roles',
    url: 'https://behance.net',
    description: 'Controle permisos de los usuarios en los diversos modulos',
    app_color: '#e08e26',
  },];
  constructor() { }

  ngOnInit(): void {
  }

}
