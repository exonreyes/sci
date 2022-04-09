import {NgModule} from '@angular/core';
import {SharedModule} from "@shared/shared.module";
import {LaunchersComponent} from './launchers/launchers.component';
import {AppSalesRoutingModule} from "@modules/apps/apps-sales/appsales-routing.module";


@NgModule({
    declarations: [
        LaunchersComponent
    ], imports: [SharedModule, AppSalesRoutingModule]
})
export class AppsSalesModule {
}
