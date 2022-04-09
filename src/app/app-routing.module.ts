import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkeletonComponent} from "@layout/skeleton/skeleton.component";

const routes: Routes = [{
    path: '', component: SkeletonComponent, children: [{
        path: '', loadChildren: () => import('@modules/apps/apps-sales/apps-sales.module')
            .then((m) => m.AppsSalesModule)
    }, {
        path: '', loadChildren: () => import('@modules/apps/inventory/apps-inventory.module')
            .then((m) => m.AppsInventoryModule)
    }]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})], exports: [RouterModule]
})
export class AppRoutingModule {
}
