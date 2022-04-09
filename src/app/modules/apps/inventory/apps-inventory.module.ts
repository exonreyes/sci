import {NgModule} from '@angular/core';

import {SharedModule} from "@shared/shared.module";
import {AppInventoryRoutingModule} from "@modules/apps/inventory/app-inventory-routing.module";
import {LaunchersComponent} from "@modules/apps/inventory/launchers/launchers.component";



@NgModule({
    declarations: [
        LaunchersComponent
    ], imports: [SharedModule, AppInventoryRoutingModule]
})
export class AppsInventoryModule {
}
