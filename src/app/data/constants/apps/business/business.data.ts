import {ICardLauncher} from "@shared/components/launcher-card/ilauncher-card.metadata";
import {icons_path} from "@data/constants/apps-description";

export const apps_business: ICardLauncher[] = [{
    name: 'Bancos',
    description: 'Centralice información de sus bancos para agilizar movimientos de ventas/compra',
    icon: icons_path + 'business/' + 'bank.svg',
    url: 'banks',
    app_color: '#3c9b7a',
}];