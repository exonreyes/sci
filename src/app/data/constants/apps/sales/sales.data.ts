import {ICardLauncher} from "@shared/components/launcher-card/ilauncher-card.metadata";
import {icons_path} from "@data/constants/apps-description";

export const apps_sales: ICardLauncher[] = [
  {
    icon: icons_path + 'sales/' + 'sale.svg',
    name: 'Ventas',
    url: 'https://behance.net',
    description: 'De ventas a presupuestos',
    app_color: '#FFCA28 '
  },
  {
    icon: icons_path + 'sales/' + 'cancel-sale.svg',
    name: 'Cancelaciones',
    url: 'https://behance.net',
    description: 'Procesamiento de devoluciones de compra o cancelaciones',
    app_color: '#F44336'
  },
  {
    icon: icons_path + 'sales/' + 'shop.svg',
    name: 'Punto de Venta',
    url: 'https://behance.net',
    description: 'Punto de venta para tiendas y servicios en general',
    app_color: '#388E3C'
  },
  {
    icon: icons_path + 'sales/' + 'contacts.svg',
    name: 'Contactos',
    url: 'https://behance.net',
    description: 'Centralice su libreta de direcciones',
    app_color: '#1976D2'
  }
];
