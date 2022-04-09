import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchersComponent} from "@modules/apps/apps-sales/launchers/launchers.component";

const routes: Routes = [{
    path: 'apps-sales', component: LaunchersComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class AppSalesRoutingModule {
}
