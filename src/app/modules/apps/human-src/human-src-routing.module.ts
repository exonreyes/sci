import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchersComponent} from "@modules/apps/human-src/launchers/launchers.component";


const routes: Routes = [{
    path: 'apps-humansrc', component: LaunchersComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HumanSrcRoutingModule {
}
