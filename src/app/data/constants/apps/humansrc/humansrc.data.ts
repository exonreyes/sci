import {ICardLauncher} from "@shared/components/launcher-card/ilauncher-card.metadata";
import {icons_path} from "@data/constants/apps-description";

export const apps_humansrc: ICardLauncher[] = [
  {
    name: 'Usuarios',
    description: 'Admininstre los usuarios que interactuan con el sistema',
    icon: icons_path + 'humansrc/' + 'user-password.svg',
    url: '',
    app_color: '#3c9b7a',
  },
  {
    name: 'Empleados',
    icon: icons_path + 'humansrc/' + 'employees.svg',
    description: 'Centralice la información de los empleados',
    url: 'https://behance.net',
    app_color: '#F4CE8F'
  },
  {
    name: 'Roles',
    icon: icons_path + 'humansrc/' + 'users-role.svg',
    description: 'Controle permisos de los usuarios en los diversos modulos',
    url: 'https://behance.net',
    app_color: '#e08e26'
  },
  {
    name: 'Bancos',
    description: 'Centralice información de sus bancos para agilizar movimientos de ventas/compra',
    icon: icons_path + 'humansrc/' + 'bank.svg',
    url: 'bank',
    app_color: '#3c9b7a',
  }
];
