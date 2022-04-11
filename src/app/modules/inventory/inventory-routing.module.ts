import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchersComponent} from "@modules/inventory/launchers/launchers.component";


const routes: Routes = [{
    path: '', component: LaunchersComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class InventoryRoutingModule {
}
