import {ICardLauncher} from "@shared/components/launcher-card/ilauncher-card.metadata";

let icon_path = "assets/icons/module/";
export const apps = [{
    name: 'Ventas', icon: icon_path + 'sales/launcher.svg', path: 'sales'
}, {
    name: 'Inventario', icon: icon_path + 'inventory/launcher.svg', path: 'inventory'
}, {
    name: 'Recursos Humanos', icon: icon_path + 'humansrc/launcher.svg', path: 'humansrc'
}, {
    name: 'Empresa', icon: icon_path + 'business/launcher.svg', path: 'business'
}];

export const apps_business: ICardLauncher[] = [{
    name: 'Bancos',
    description: 'Centralice información de sus bancos para agilizar pagos de ventas',
    icon: icon_path + 'business/' + 'bank.svg',
    url: 'https://behance.net',
    app_color: '#3c9b7a',
}];
export const apps_humansrc: ICardLauncher[] = [{
    name: 'Usuarios',
    description: 'Admininstre los usuarios que interactuan con el sistema',
    icon: icon_path + 'humansrc/' + 'user-password.svg',
    url: '',
    app_color: '#3c9b7a',
}, {
    name: 'Empleados',
    icon: icon_path + 'humansrc/' + 'employees.svg',
    description: 'Centralice la información de los empleados',
    url: 'https://behance.net',
    app_color: '#F4CE8F'
}, {
    name: 'Roles',
    icon: icon_path + 'humansrc/' + 'users-role.svg',
    description: 'Controle permisos de los usuarios en los diversos modulos',
    url: 'https://behance.net',
    app_color: '#e08e26'
}];
export const apps_inventory: ICardLauncher[] = [{
    icon: icon_path + 'inventory/' + 'box.svg',
    name: 'Inventario',
    url: 'https://behance.net',
    description: 'Gestione sus actividades de stock y logística',
    app_color: '#F4CE8F',
}, {
    icon: icon_path + 'inventory/' + 'shop.svg',
    name: 'Compras',
    url: 'https://behance.net',
    description: 'Órdenes de compra y acuerdos a sus proveedores',
    app_color: '#3c9b7a',
}, {
    icon: icon_path + 'inventory/' + 'inventory-ajust.svg',
    name: 'Ajustes de inventario',
    url: 'https://behance.net',
    description: 'Realice la modificación del valor y/o la cantidad de stock en su negocio',
    app_color: '#e08e26',
}, {
    icon: icon_path + 'inventory/' + 'providers.svg',
    name: 'Proveedores',
    url: 'https://behance.net',
    description: 'Catalogue a proveedores para que le brinden un mejor servicio/producto',
    app_color: '#1976D2'
}];
export const apps_sales: ICardLauncher[] = [{
    icon: icon_path + 'sales/' + 'sale.svg',
    name: 'Ventas',
    url: 'https://behance.net',
    description: 'De ventas a presupuestos',
    app_color: '#FFCA28 '
}, {
    icon: icon_path + 'sales/' + 'cancel-sale.svg',
    name: 'Cancelaciones',
    url: 'https://behance.net',
    description: 'Procesamiento de devoluciones de compra o cancelaciones',
    app_color: '#F44336'
}, {
    icon: icon_path + 'sales/' + 'shop.svg',
    name: 'Punto de Venta',
    url: 'https://behance.net',
    description: 'Punto de venta para tiendas y servicios en general',
    app_color: '#388E3C'
}, {
    icon: icon_path + 'sales/' + 'contacts.svg',
    name: 'Contactos',
    url: 'https://behance.net',
    description: 'Centralice su libreta de direcciones',
    app_color: '#1976D2'
}];