import {NgModule} from '@angular/core';
import {LaunchersComponent} from "@modules/business/launchers/launchers.component";
import {BusinessRoutingModule} from "@modules/business/business-routing.module";
import {SharedModule} from "@shared/shared.module";

@NgModule({
    declarations: [LaunchersComponent], imports: [BusinessRoutingModule, SharedModule]
})
export class BusinessModule {
}
