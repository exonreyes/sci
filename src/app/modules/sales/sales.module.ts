import {NgModule} from '@angular/core';
import {SharedModule} from "@shared/shared.module";

import {SalesRoutingModule} from "@modules/sales/sales-routing.module";
import {LaunchersComponent} from "@modules/sales/launchers/launchers.component";

@NgModule({
    declarations: [LaunchersComponent], imports: [SharedModule, SalesRoutingModule]
})
export class SalesModule {
}
