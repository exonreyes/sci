import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchersComponent} from "@modules/apps/inventory/launchers/launchers.component";


const routes: Routes = [{
    path: 'apps-inventory', component: LaunchersComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class AppInventoryRoutingModule {
}
