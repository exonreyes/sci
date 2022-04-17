import {ICardLauncher} from "@shared/components/launcher-card/ilauncher-card.metadata";
import {icons_path} from "@data/constants/apps-description";

export const apps_inventory: ICardLauncher[] = [{
    icon: icons_path + 'inventory/' + 'box.svg',
    name: 'Inventario',
    url: 'https://behance.net',
    description: 'Gestione sus actividades de stock y logística',
    app_color: '#F4CE8F',
}, {
    icon: icons_path + 'inventory/' + 'shop.svg',
    name: 'Compras',
    url: 'https://behance.net',
    description: 'Órdenes de compra y acuerdos a sus proveedores',
    app_color: '#3c9b7a',
}, {
    icon: icons_path + 'inventory/' + 'inventory-ajust.svg',
    name: 'Ajustes de inventario',
    url: 'https://behance.net',
    description: 'Realice la modificación del valor y/o la cantidad de stock en su negocio',
    app_color: '#e08e26',
}, {
    icon: icons_path + 'inventory/' + 'providers.svg',
    name: 'Proveedores',
    url: 'https://behance.net',
    description: 'Catalogue a proveedores para que le brinden un mejor servicio/producto',
    app_color: '#1976D2'
}];