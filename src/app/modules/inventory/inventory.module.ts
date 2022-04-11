import {NgModule} from '@angular/core';

import {SharedModule} from "@shared/shared.module";
import {InventoryRoutingModule} from "@modules/inventory/inventory-routing.module";
import {LaunchersComponent} from "@modules/inventory/launchers/launchers.component";


@NgModule({
    declarations: [
        LaunchersComponent
    ], imports: [SharedModule, InventoryRoutingModule]
})
export class InventoryModule {
}
